'use client';

import { useState } from 'react';
import SvgCheckmark from './icons/Checkmark';

interface Props {
    type: 'start' | 'restart';
}

export default function InjectText({ type }: Props) {
    const [checked, setChecked] = useState(true);
    return (
        <div className="flex flex-col gap-3">
            <span
                className="text-sm font-regular
            text-slate-800 dark:text-white
            "
            >{`Inject ${type} text`}</span>
            <div className="relative w-full">
                <input
                    className="border border-slate-200
                    dark:border-slate-700
                    dark:bg-slate-900
                    rounded-sm
                    pr-3 pl-8 py-1.5 w-full focus:outline-none focus:ring-2
                    text-slate-800
                    font-regular
                    text-sm
                    text-left
                    bg-white"
                />

                <div className="absolute top-0 left-2 h-full flex items-center justify-start">
                    <input
                        type="checkbox"
                        className="w-5 h-5
                        appearance-none
                        checked:bg-teal-500
                        rounded-sm
                        border border-slate-200
                        dark:border-slate-700
                    "
                        defaultChecked={checked}
                        onChange={() => setChecked((prev) => !prev)}
                    />
                    {checked && (
                        <SvgCheckmark
                            className="w-3 h-3 absolute top-3.4 left-1"
                            pointerEvents={'none'}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
