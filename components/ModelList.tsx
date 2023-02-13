import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
// an array of all GPT models
import { modelAtom } from '@/store';
import clsx from 'clsx';
import { useAtom } from 'jotai';

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

export default function ModelList() {
    const [activeModels, setActiveModels] = useState<any>([]);
    const [model, setModel] = useAtom(modelAtom);

    const models = useQuery('models', async () => {
        const data = await fetch(`https://api.openai.com/v1/models`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
            },
        });
        return data.json();
    });

    useEffect(() => {
        if (models.isFetched) {
            const mods = models.data.data.filter((m: any) =>
                whitelistedModels.includes(m.id)
            );
            setActiveModels(mods);
        }
    }, [models]);

    return (
        <div
            className={clsx(
                'absolute z-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-sm shadow-sm w-full top-11 right-0 overflow-y-scroll scroll-smooth transition-transform duration-200 ease-in-out transform scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-100 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-slate-900 scrollbar-thumb-rounded-full '
            )}
        >
            <div className="flex flex-col gap-0">
                <span className="text-xs font-medium text-slate-800 dark:text-white text-uppercase px-3 py-2">
                    GPT-3
                </span>
                <div className="flex flex-col max-h-64 ">
                    {/* TODO: type model */}
                    {activeModels.length &&
                        activeModels.map((m: any) => (
                            <button
                                className={clsx(
                                    'flex items-center gap-2 p-3 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-100 ease-in-out text-slate-800 dark:text-white font-regular text-xs',
                                    {
                                        'bg-teal-300 dark:bg-teal-700 hover:bg-teal-400 dark:hover:bg-teal-600                       ':
                                            m.id === model,
                                        'text-slate-800 dark:white':
                                            m.id === model,
                                    }
                                )}
                                key={m.id}
                                onClick={() => {
                                    setModel(m.id);
                                }}
                            >
                                {m.id}
                            </button>
                        ))}
                </div>
            </div>
        </div>
    );
}
