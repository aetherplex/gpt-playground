import { Dispatch, SetStateAction } from 'react';

interface ModeOptionProps {
    icon: JSX.Element;
    id: string;
    setActiveMode: Dispatch<SetStateAction<string>>;
    defaultChecked?: boolean;
}

export default function ModeOption({
    icon,
    id,
    setActiveMode,
    defaultChecked = false,
}: ModeOptionProps) {
    return (
        <>
            <input
                type="radio"
                className="hidden"
                name="modes"
                id={id}
                defaultChecked={defaultChecked}
                onChange={() => setActiveMode(id)}
            />
            <label
                id={`${id}-label`}
                htmlFor={id}
                className="cursor-pointer flex items-center justify-center uppercase select-none font-semibold text-xs rounded-md py-1 text-slate-800 dark:text-white w-full z-20"
            >
                {icon}
            </label>
        </>
    );
}
