import clsx from 'clsx';
import { useState } from 'react';
import SvgCompleteMode from './icons/CompleteMode';
import SvgEditMode from './icons/EditMode';
import SvgInsertMode from './icons/InsertMode';
import ModeOption from './ModeOption';
import ParamLabel from './ParamLabel';

export default function ModeSelector() {
    const [activeMode, setActiveMode] = useState('complete');
    return (
        <div className="flex flex-col gap-3">
            <ParamLabel>
                Mode{' '}
                <span className="text-slate-400 dark:text-slate-500">
                    (Not functional)
                </span>
            </ParamLabel>
            <div
                className="flex w-full bg-slate-100 dark:bg-slate-900 h-14 rounded-md relative
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
                    className="activeMode h-14 w-1/3  left-0 bg-white dark:bg-slate-700 absolute z-10

                "
                />
            </div>
        </div>
    );
}
