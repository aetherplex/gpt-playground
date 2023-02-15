import useBlur from '@/hooks/useBlur';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const options = ['Off', 'Most likely', 'Least likely', 'Full spectrum'];

export default function ShowProbabilities() {
    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const { handleBlur } = useBlur({ setIsActive });

    useEffect(() => {
        setIsActive(false);
    }, [selectedOption]);

    return (
        <div className="flex flex-col gap-3">
            <span
                className="text-sm font-regular
                  text-slate-800 dark:text-white
            "
            >
                Show probabilities
            </span>
            <div className="relative" onBlur={handleBlur}>
                <input
                    className="
                border border-slate-200 rounded-md
                px-3 py-2 w-full focus:outline-none focus:ring-2
                    dark:bg-slate-900
                    dark:border-slate-700
                text-slate-800 dark:text-white
                font-regular
                text-sm
                text-left
                bg-white
                "
                    type="text"
                    value={selectedOption}
                    onChange={() => {}}
                    onClick={() => setIsActive(true)}
                />

                {isActive ? (
                    <FiChevronUp className="absolute right-3 top-2.5 text-slate-400 dark:text-slate-500" />
                ) : (
                    <FiChevronDown className="absolute right-3 top-3 text-slate-400 dark:text-slate-500" />
                )}
                {isActive && (
                    <div
                        className={clsx(
                            'absolute z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md shadow-sm w-full top-11 right-0 overflow-y-scroll scroll-smooth transition-transform duration-200 ease-in-out transform scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-100 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-slate-900 scrollbar-thumb-rounded-full '
                        )}
                    >
                        {options?.length > 0 &&
                            options.map((option: string) => (
                                <button
                                    className={clsx(
                                        ' w-full flex items-center gap-2 p-3 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-100 ease-in-out text-slate-800 dark:text-white font-regular text-xs',
                                        {
                                            'bg-teal-500 dark:bg-teal-700 hover:bg-teal-500 dark:hover:bg-teal-600 text-white                       ':
                                                option === selectedOption,
                                            'text-slate-800 dark:white':
                                                option === selectedOption,
                                        }
                                    )}
                                    key={option}
                                    onClick={() => {
                                        setSelectedOption(option);
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}
