import { presetListAtom, settingsAtom } from '@/store';
import { trpc } from '@/utils/trpc';
import { useAtom } from 'jotai';
import localforage from 'localforage';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';

interface SaveModalProps {
    onClose: () => void;
}

interface FormValues {
    name: string;
    description?: string;
}

export default function SaveModal({ onClose }: SaveModalProps) {
    const [settings] = useAtom(settingsAtom);
    const presetMutation = trpc.savePreset.useMutation();
    const [isLoading, setIsLoading] = useState(false);
    const [, setPresets] = useAtom(presetListAtom);

    const { register, handleSubmit } = useForm<FormValues>();

    async function savePreset({
        name,
        description,
    }: {
        name: string;
        description?: string;
    }) {
        setIsLoading(true);
        const localDB =
            process.env.NEXT_PUBLIC_LOCAL_DB === 'true' ? true : false;
        if (localDB) {
            const presets =
                ((await localforage.getItem('presets')) as any) || [];
            const updatedPresets = await localforage.setItem('presets', [
                ...presets,
                {
                    name,
                    description,
                    settings: {
                        prompt: settings.prompt,
                        model: settings.model,
                        temperature: settings.temperature,
                        maxTokens: settings.maxTokens,
                        topP: settings.topP,
                        frequencyPenalty: settings.frequencyPenalty,
                        presencePenalty: settings.presencePenalty,
                        n: settings.n,
                        bestOf: settings.bestOf,
                        stream: settings.stream,
                        echo: settings.echo,
                        stopSequences: settings.stopSequences,
                        logprobs: settings.logprobs,
                        startText: settings.startText,
                        restartText: settings.restartText,
                    },
                },
            ] as any);
            setPresets(updatedPresets);
        } else {
            await presetMutation.mutateAsync({
                name,
                description,
                settings: {
                    prompt: settings.prompt,
                    model: settings.model,
                    temperature: settings.temperature,
                    maxTokens: settings.maxTokens,
                    topP: settings.topP,
                    frequencyPenalty: settings.frequencyPenalty,
                    presencePenalty: settings.presencePenalty,
                    n: settings.n,
                    bestOf: settings.bestOf,
                    stream: settings.stream,
                    echo: settings.echo,
                    stopSequences: settings.stopSequences,
                    logprobs: settings.logprobs,
                },
            });
        }
        setIsLoading(false);
        onClose();
    }

    return createPortal(
        <>
            <div
                className="w-screen h-screen bg-slate-900 opacity-30 z-50 absolute top-0"
                onClick={onClose}
            ></div>

            <div className="bg-white dark:bg-slate-800 rounded-md shadow-lg absolute modal-content">
                <form
                    className="w-full h-full flex flex-col gap-5 p-5"
                    onSubmit={handleSubmit(savePreset)}
                >
                    <h1 className="text-lg font-semibold text-slate-800 dark:text-white">
                        Save preset
                    </h1>
                    <p className="font-regular text-slate-600 dark:text-slate-500 text-sm">
                        This will save the current playground state as a preset
                        which you can access later or share with others.
                    </p>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="name"
                            className="text-slate-800 dark:text-white font-medium text-sm"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full h-9 px-3 rounded-md border border-slate-200 dark:border-slate-700
                            text-sm
                          dark:bg-slate-900
                          dark:text-white
                          focus:outline-teal-500
                          transition-colors
                          duration-200
                          "
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="name"
                            className="text-slate-800 dark:text-white font-medium text-sm"
                        >
                            Description{' '}
                            <span className=" ml-1 text-slate-400 font-normal">
                                Optional
                            </span>
                        </label>
                        <input
                            type="text"
                            className="w-full h-9 px-3 rounded-md border border-slate-200 dark:border-slate-700
                            text-sm
                          dark:bg-slate-900
                          dark:text-white
                          focus:outline-teal-500
                          transition-colors
                          duration-200
                          "
                            {...register('description')}
                        />
                    </div>
                    <div className="flex justify-end gap-2 w-full">
                        <button
                            className="  py-2 rounded-md bg-slate-100
                            dark:bg-slate-700
                            dark:text-white  text-sm
                          hover:bg-slate-200
                          dark:hover:bg-slate-600
                          transition-colors
                          duration-100
                          ease-in-out
                          w-20
                          flex items-center justify-center
                        "
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            className=" py-2 rounded-md bg-teal-500 text-white text-sm
                        hover:bg-teal-600
                        transition-colors
                        duration-100
                        ease-in-out
                        w-20
                        flex items-center justify-center
                        "
                            type="submit"
                        >
                            {isLoading ? (
                                <ClipLoader
                                    color={'#fff'}
                                    loading={isLoading}
                                    // cssOverride={override}
                                    size={15}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                            ) : (
                                'Save'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </>,
        document.getElementById('modal-root') as HTMLElement
    );
}
