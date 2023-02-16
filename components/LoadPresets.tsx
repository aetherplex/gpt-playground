import { trpc } from '@/utils/trpc';
import clsx from 'clsx';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function LoadPresets() {
    const [isActive, setIsActive] = useState<boolean>(false);

    const presets = trpc.getPresets.useQuery({ userId: 1 });

    return (
        <div className="relative">
            <input
                placeholder="Load a preset..."
                className="border border-slate-200 rounded-md
                    px-3 py-1 w-64 focus:outline-none focus:ring-2
                    text-slate-400
                    text-sm
                    dark:bg-slate-900
                    dark:border-slate-700
                    relative
                    "
                onClick={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
            />
            {isActive ? (
                <FiChevronUp className="absolute right-3 top-1.5 text-slate-400 dark:text-slate-500" />
            ) : (
                <FiChevronDown className="absolute right-3 top-2 text-slate-400 dark:text-slate-500" />
            )}
            {isActive && (
                <div
                    className={clsx(
                        'min-h-20 absolute z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md shadow-sm w-full top-11 right-0 overflow-y-scroll scroll-smooth transition-transform duration-200 ease-in-out transform scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-100 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-slate-900 scrollbar-thumb-rounded-full flex flex-col gap-0'
                    )}
                >
                    <span className="text-xs font-regular text-slate-400 dark:text-slate-500 uppercase px-3 py-2">
                        My presets
                    </span>
                    {presets.isFetched && presets?.data?.length ? (
                        // TODO:: fix this
                        presets.data.map((preset: any) => (
                            <button
                                className={clsx(
                                    'flex items-center gap-2 p-3 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-100 ease-in-out text-slate-800 dark:text-white font-regular text-xs'
                                )}
                                key={preset.name}
                                onClick={() => {
                                    setIsActive(false);
                                }}
                            >
                                {preset.name}
                            </button>
                        ))
                    ) : (
                        <span
                            className="p-3 text-sm text-slate-400
                            dark:text-slate-500
                            font-regular
                            w-full text-center

                        "
                        >
                            No saved presets
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}
