import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
    'flex items-center justify-center rounded-sm font-regular focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors duration-200 ease-in-out',
    {
        variants: {
            intent: {
                primary: 'bg-teal-500 text-white hover:bg-teal-600',
                secondary:
                    'bg-slate-20 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-30 dark:hover:bg-slate-600',
                tertiary:
                    'bg-slate-50 text-slate-800 dark:text-white hover:bg-slate-100',
            },
            fullWidth: {
                true: 'w-full',
            },
            size: {
                sm: 'px-2 py-1 text-xs',
                md: 'px-3 py-1 text-sm',
                lg: 'px-4 py-1.5 text-base',
            },
        },
        defaultVariants: {
            intent: 'primary',
            size: 'md',
            fullWidth: false,
        },
    }
);

interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export default function Button({
    children,
    intent,
    size,
    fullWidth,
    type = 'button',
}: Props) {
    return (
        <button
            className={buttonStyles({ intent, size, fullWidth })}
            type={type}
        >
            {children}
        </button>
    );
}
