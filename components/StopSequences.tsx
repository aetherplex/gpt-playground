export default function StopSequences() {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-sm font-regular text-slate-800 dark:text-white">
                Stop sequences
            </span>
            <span className="text-xs font-regular text-slate-500">
                Enter sequence and press Tab
            </span>
            <textarea
                className="border border-slate-200 rounded-md
                flex-1 p-2 mt-1
                focus:outline-none focus:ring-1
                dark:bg-slate-900
                dark:text-white
                dark:border-slate-700
                focus:ring-slate-500 focus:ring-opacity-50
                text-sm font-regular
                "
                rows={1}
            />
        </div>
    );
}
