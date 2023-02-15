import { Dispatch, SetStateAction, useCallback } from 'react';

interface UseBlurProps {
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

export default function useBlur({ setIsActive }: UseBlurProps) {
    const handleBlur = useCallback(
        (e: React.FocusEvent<HTMLDivElement>) => {
            const currentTarget = e.currentTarget;

            // Give browser time to focus the next element
            requestAnimationFrame(() => {
                // Check if the new focused element is a child of the original container
                if (!currentTarget.contains(document.activeElement)) {
                    setIsActive(false);
                }
            });
        },
        [setIsActive]
    );

    return {
        handleBlur,
    };
}
