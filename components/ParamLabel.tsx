interface ParamLabelProps {
    children: React.ReactNode;
}

export default function ParamLabel({ children }: ParamLabelProps) {
    return (
        <span className="text-xs font-regular text-slate-800 dark:text-white">
            {children}
        </span>
    );
}
