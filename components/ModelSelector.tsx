import { activeModelAtom, modelAtom } from '@/store';
import { useAtom } from 'jotai';
import { useCallback, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ModelList from './ModelList';

export default function ModelSelector() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [model, setModel] = useAtom(modelAtom);
    const [activeModels, setActiveModels] = useAtom(activeModelAtom);

    const handleBlur = useCallback(
        (e: React.FocusEvent<HTMLDivElement>) => {
            const currentTarget = e.currentTarget;

            // Give browser time to focus the next element
            requestAnimationFrame(() => {
                // Check if the new focused element is a child of the original container
                if (!currentTarget.contains(document.activeElement)) {
                    setIsActive(false);
                }
            });
        },
        [setIsActive]
    );

    return (
        <div className="flex flex-col gap-3">
            <span className="text-sm font-regular text-slate-800 dark:text-white">
                Model
            </span>
            <div className="relative" onBlur={handleBlur}>
                <input
                    className="
                        border border-slate-200 rounded-md
                        px-3 py-2 w-full focus:outline-none focus:ring-2
                        text-slate-800
                        dark:text-white
                        dark:bg-slate-900
                        dark:border-slate-700
                        font-regular
                        text-sm
                        bg-white
                        text-left
                        cursor-default
                    "
                    // TODO: Add model filtering on input change
                    onChange={() => {}}
                    onClick={() => setIsActive(true)}
                    value={model}
                />
                {isActive ? (
                    <FiChevronUp className="absolute right-3 top-2.5 text-slate-400 dark:text-slate-500" />
                ) : (
                    <FiChevronDown className="absolute right-3 top-3 text-slate-400 dark:text-slate-500" />
                )}
                {isActive && <ModelList setIsActive={setIsActive} />}
            </div>
        </div>
    );
}
