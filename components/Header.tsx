import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import Button from './Button';
import IconButton from './IconButton';
import LoadPresets from './LoadPresets';
import SaveModal from './SaveModal';

export default function Header() {
    const [currentTheme, setCurrentTheme] = useState<string>('light');
    const [isActive, setIsActive] = useState<boolean>(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    useEffect(() => {
        if (theme) {
            setCurrentTheme(theme);
        }
    }, [theme]);

    return (
        <>
            <div
                className="w-full px-7 py-4 border-b flex justify-between items-center dark:bg-slate-800
            border-slate-200 dark:border-slate-700
        "
            >
                <h1 className="font-medium text-lg text-slate-800 dark:text-white">
                    Playground
                </h1>
                <div className="flex items-center gap-3">
                    <LoadPresets />
                    <Button
                        intent="secondary"
                        onClick={() => {
                            setModalOpen(true);
                        }}
                    >
                        Save
                    </Button>
                    {/* <Button intent="secondary">View code</Button>
                <Button intent="secondary">Share</Button> */}
                    <IconButton
                        intent="secondary"
                        size="sm"
                        onClick={() => {
                            setTheme(
                                currentTheme === 'dark' ? 'light' : 'dark'
                            );
                        }}
                    >
                        {currentTheme === 'dark' ? <FiSun /> : <FiMoon />}
                    </IconButton>
                </div>
            </div>
            {modalOpen && <SaveModal onClose={() => setModalOpen(false)} />}
        </>
    );
}
