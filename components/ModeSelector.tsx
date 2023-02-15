import clsx from 'clsx';
import { useState } from 'react';
import SvgCompleteMode from './icons/CompleteMode';
import SvgEditMode from './icons/EditMode';
import SvgInsertMode from './icons/InsertMode';
import ModeOption from './ModeOption';

export default function ModeSelector() {
    const [activeMode, setActiveMode] = useState('complete');
    return (
        <div className="flex flex-col gap-3">
            <span
                className="text-sm font-regular
            text-slate-800 dark:text-white
            "
            >
                Mode
            </span>
            <div
                className="flex w-full bg-slate-100 dark:bg-slate-900 h-16 rounded-md relative
                border border-slate-200 dark:border-slate-700

            "
            >
                <ModeOption
                    id="complete"
                    defaultChecked
                    icon={
                        <SvgCompleteMode
                            width={20}
                            height={20}
                            className={clsx({
                                'fill-slate-800 dark:fill-white':
                                    activeMode === 'complete',
                                'fill-slate-400 dark:fill-slate-400':
                                    activeMode !== 'complete',
                            })}
                        />
                    }
                    setActiveMode={setActiveMode}
                />
                <ModeOption
                    id="insert"
                    icon={
                        <SvgInsertMode
                            width={20}
                            height={20}
                            className={clsx({
                                'fill-slate-800 dark:fill-white':
                                    activeMode === 'insert',
                                'fill-slate-400 dark:fill-slate-400':
                                    activeMode !== 'insert',
                            })}
                        />
                    }
                    setActiveMode={setActiveMode}
                />
                <ModeOption
                    id="edit"
                    icon={
                        <SvgEditMode
                            width={20}
                            height={20}
                            className={clsx({
                                'fill-slate-800 dark:fill-white':
                                    activeMode === 'edit',
                                'fill-slate-400 dark:fill-slate-400':
                                    activeMode !== 'edit',
                            })}
                        />
                    }
                    setActiveMode={setActiveMode}
                />
                <div
                    className="activeMode h-16 w-1/3  left-0 bg-white dark:bg-slate-700 absolute z-10

                "
                />
            </div>
        </div>
    );
}
