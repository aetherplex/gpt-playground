import { stopSequencesAtom } from '@/store';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import ParamLabel from './ParamLabel';

export default function StopSequences() {
    const [html, setHtml] = useState<string>('');
    const [stopSequences, setStopSequences] = useAtom(stopSequencesAtom);

    function addTag(e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.key === 'Backspace' && !html) {
            setStopSequences(stopSequences.slice(0, -1));
        }

        if (e.key === 'Tab' || e.key === 'Enter') {
            e.preventDefault();
            const tag = html.trim();
            if (tag) {
                setStopSequences([...stopSequences, tag]);
                setHtml('');
            }
        }
    }

    return (
        <div className="flex flex-col gap-1">
            <ParamLabel>Stop Sequences</ParamLabel>
            <span className="text-xs font-regular text-slate-500">
                Enter sequence and press Tab
            </span>
            <div
                className="border border-slate-200 rounded-md
                flex-1 p-2 mt-1
                focus:outline-none focus:ring-1
                dark:bg-slate-900
                bg-white
                dark:text-white
                dark:border-slate-700
                focus:ring-slate-500 focus:ring-opacity-50
                text-sm font-regular
                min-h-[2.75rem] stop-sequences
                flex items-center gap-1
                justify-start
                flex-wrap
                "
                onClick={
                    // Focus input child element
                    () => {
                        const input = document.querySelector(
                            '.stop-sequences input'
                        ) as HTMLInputElement;
                        if (input) {
                            input.focus();
                        }
                    }
                }
            >
                {stopSequences.map((tag) => (
                    <div
                        key={tag}
                        className="bg-slate-200 dark:bg-slate-700
                        rounded-md
                        px-2
                        text-slate-800 dark:text-white
                        text-xs font-regular
                        flex gap-1 items-center
                        "
                    >
                        <span className=" py-1">{tag}</span>
                        <button
                            onClick={() => {
                                setStopSequences(
                                    stopSequences.filter((t) => t !== tag)
                                );
                            }}
                        >
                            <FiX />
                        </button>
                    </div>
                ))}
                <input
                    onKeyDown={(e) => addTag(e)}
                    className="
                    border-none
                    outline-none
                    focus:outline-none
                    bg-transparent
                    "
                    style={{
                        width: `${html.length + 1}ch`,
                    }}
                    value={html}
                    onChange={(e) => setHtml(e.target.value)}
                    type="text"
                />
            </div>
            {/* <input
                onKeyDown={(e) => addTag(e)}
                className="border border-slate-200 rounded-md
                flex-1 p-2 mt-1
                focus:outline-none focus:ring-1
                dark:bg-slate-900
                bg-white
                dark:text-white
                dark:border-slate-700
                focus:ring-slate-500 focus:ring-opacity-50
                text-sm font-regular
                "

                onChange={(e) => setHtml(e.target.value)}
                value={html}
            /> */}
        </div>
    );
}
