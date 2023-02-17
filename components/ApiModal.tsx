import { apiKeyAtom } from '@/store';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';

interface ApiModalProps {
    onClose: () => void;
}

interface FormValues {
    key: string;
}

export default function ApiModal({ onClose }: ApiModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [apiKey, setApiKey] = useAtom(apiKeyAtom);

    const { register, handleSubmit } = useForm<FormValues>();

    async function savePreset({ key }: { key: string }) {
        setIsLoading(true);
        setApiKey(key);
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
                        Set OpenAI API key
                    </h1>
                    <p className="font-regular text-slate-600 dark:text-slate-400 text-sm">
                        This will be stored in the app&apos;s local state and
                        will need to be added again if you end your browser
                        session or refresh the page.
                    </p>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="name"
                            className="text-slate-800 dark:text-white font-medium text-sm"
                        >
                            API Key
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
                            defaultValue={apiKey}
                            {...register('key')}
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
                                'Set'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </>,
        document.getElementById('modal-root') as HTMLElement
    );
}
