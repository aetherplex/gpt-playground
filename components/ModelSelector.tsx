import useBlur from '@/hooks/useBlur';
import { modelAtom } from '@/store';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ModelList from './ModelList';
import ParamLabel from './ParamLabel';

export default function ModelSelector() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [model, setModel] = useAtom(modelAtom);

    const { handleBlur } = useBlur({ setIsActive });

    return (
        <div className="flex flex-col gap-3">
            <ParamLabel>Model</ParamLabel>
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
