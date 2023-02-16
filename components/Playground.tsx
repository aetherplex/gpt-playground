import useOpenAI from '@/hooks/useOpenAI';
import { promptAtom } from '@/store';
import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { useForm } from 'react-hook-form';
import Button from './Button';
import IconButton from './IconButton';
import SvgRegenerate from './icons/Regenerate';
import SvgShowHistory from './icons/ShowHistory';
import SvgUndoLast from './icons/UndoLast';
import Sidebar from './Sidebar';

export default function Playground() {
    const [prompt, setPrompt] = useState<string>('');
    const resultRef = useRef<HTMLDivElement>(null);
    const [html, setHtml] = useState<string>('');
    const [, setSettingsPrompt] = useAtom(promptAtom);

    const { updatePrompt, response, setResponse } = useOpenAI({ resultRef });

    useEffect(() => {
        if (response.length > 0) {
            setHtml(`${prompt} \n \n${response}`);
            setSettingsPrompt(`${prompt} \n \n${response}`);
        }
    }, [response]);

    const { handleSubmit } = useForm();

    async function onSubmit() {
        setResponse('');
        await updatePrompt(prompt);
    }

    function handleChange(evt: any) {
        setHtml(evt.target.value);
        setPrompt(evt.target.value);
        setSettingsPrompt(evt.target.value);
    }

    return (
        <div className="w-full bg-slate-50 grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6 gap-6 p-6 flex-1 dark:bg-slate-800">
            <form
                className="flex flex-col gap-3 col-span-1 md:col-span-3 2xl:col-span-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <ContentEditable
                    html={html}
                    disabled={false}
                    onChange={handleChange}
                    data-ph="Write a tagline for an ice cream shop."
                    className="border border-slate-200   w-full
                            dark:border-slate-700
                            dark:bg-slate-900
                            dark:text-white
                            text-slate-700
                            bg-white
                            rounded-md flex-1 p-4
                            focus:outline-none
                            w-full
                            leading-6
                            focus:placeholder-slate-300
                        overflow-y-auto
                        whitespace-pre-wrap
                        "
                />
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <Button intent="primary" size="lg" type="submit">
                            Submit
                        </Button>
                        <IconButton
                            intent="secondary"
                            size="md"
                            onClick={() => setPrompt('')}
                        >
                            <SvgRegenerate width={15} height={15} />
                        </IconButton>
                        <IconButton intent="secondary" size="md">
                            <SvgUndoLast width={15} height={15} />
                        </IconButton>
                        <IconButton intent="tertiary" size="md">
                            <SvgShowHistory width={15} height={15} />
                        </IconButton>
                    </div>
                </div>
            </form>

            <Sidebar />
        </div>
    );
}
