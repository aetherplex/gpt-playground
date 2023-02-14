import { activeModelAtom, modelAtom } from '@/store';
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { Dispatch, SetStateAction } from 'react';
import { useQuery } from 'react-query';

const whitelistedModels = [
    'text-davinci-003',
    'text-curie-001',
    'text-babbage-001',
    'text-ada-001',
    'text-davinci-002',
    'text-davinci-001',
    'davinci-instruct-beta',
    'davinci',
    'curie-instruct-beta',
    'curie',
    'babbbage',
    'ada',
];

interface ModelListProps {
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

export default function ModelList({ setIsActive }: ModelListProps) {
    const [activeModels, setActiveModels] = useAtom(activeModelAtom);
    const [model, setModel] = useAtom(modelAtom);

    const models = useQuery(
        'models',
        async () => {
            const data = await fetch(`https://api.openai.com/v1/models`, {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
                },
            });
            return data.json();
        },
        {
            select: (data) => {
                return data.data.filter((model: any) =>
                    whitelistedModels.includes(model.id)
                );
            },
        }
    );

    return (
        <div
            className={clsx(
                'absolute z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md shadow-sm w-full top-11 right-0 overflow-y-scroll scroll-smooth transition-transform duration-200 ease-in-out transform scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-100 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-slate-900 scrollbar-thumb-rounded-full '
            )}
        >
            <div className="flex flex-col gap-0">
                <span className="text-xs font-medium text-slate-800 dark:text-white text-uppercase px-3 py-2">
                    GPT-3
                </span>
                <div className="flex flex-col max-h-64 ">
                    {/* TODO: type model */}
                    {whitelistedModels?.length > 0 &&
                        whitelistedModels.map((m: any) => (
                            <button
                                className={clsx(
                                    'flex items-center gap-2 p-3 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-100 ease-in-out text-slate-800 dark:text-white font-regular text-xs',
                                    {
                                        'bg-teal-500 dark:bg-teal-700 hover:bg-teal-600 dark:hover:bg-teal-600 text-white                       ':
                                            m === model,
                                        'text-slate-800 dark:white':
                                            m === model,
                                    }
                                )}
                                key={m}
                                onClick={() => {
                                    setModel(m);
                                    setIsActive(false);
                                }}
                            >
                                {m}
                            </button>
                        ))}
                </div>
            </div>
        </div>
    );
}
