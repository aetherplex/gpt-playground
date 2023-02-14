import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
    'flex items-center justify-center rounded-md font-regular focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors duration-200 ease-in-out',
    {
        variants: {
            intent: {
                primary:
                    'bg-teal-500 text-white hover:bg-teal-600 dark:hover:bg-teal-400',
                secondary:
                    'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600',
                tertiary:
                    'bg-transparent text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700',
            },
            size: {
                sm: 'p-2 text-xs',
                md: 'p-2.5 text-sm',
                lg: 'p-4 text-base',
            },
            fullWidth: {
                true: 'w-full',
            },
        },
        defaultVariants: {
            intent: 'primary',
            size: 'md',
            fullWidth: false,
        },
    }
);

interface IconButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

interface Props extends IconButtonProps, VariantProps<typeof buttonStyles> {}

export default function IconButton({
    children,
    intent,
    size,
    fullWidth,
    onClick,
    type = 'button',
}: Props) {
    return (
        <button
            className={buttonStyles({ intent, size, fullWidth })}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
}
