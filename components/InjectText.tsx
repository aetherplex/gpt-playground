'use client';

import { InsertText } from '@/store';
import { SetStateAction } from 'jotai';
import { Dispatch } from 'react';
import SvgCheckmark from './icons/Checkmark';
import ParamLabel from './ParamLabel';

interface Props {
    type: 'start' | 'restart';
    setInjectValues: Dispatch<SetStateAction<InsertText>>;
    injectValues: InsertText;
}

export default function InjectText({
    type,
    setInjectValues,
    injectValues,
}: Props) {
    return (
        <div className="flex flex-col gap-3">
            <ParamLabel>
                {`Inject ${type} text`}{' '}
                <span className="text-slate-400 dark:text-slate-500">
                    (Not functional)
                </span>
            </ParamLabel>
            <div className="relative w-full">
                <input
                    className="border border-slate-200
                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:text-white
                    rounded-md
                    pr-3 pl-8 py-1.5 w-full focus:outline-none focus:ring-2
                    text-slate-800
                    font-regular
                    text-sm
                    text-left
                    bg-white"
                    type="text"
                    value={injectValues?.text}
                    onChange={(e) =>
                        setInjectValues({
                            text: e.target.value,
                            enabled: injectValues?.enabled,
                        })
                    }
                />

                <div className="absolute top-0 left-2 h-full flex items-center justify-start">
                    <input
                        type="checkbox"
                        className="w-5 h-5
                        appearance-none
                        checked:bg-teal-500
                        rounded-md
                        border border-slate-200
                        dark:border-slate-700
                    "
                        defaultChecked={injectValues?.enabled}
                        onChange={() =>
                            setInjectValues({
                                text: injectValues?.text,
                                enabled: !injectValues.enabled,
                            })
                        }
                    />
                    {injectValues?.enabled && (
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
