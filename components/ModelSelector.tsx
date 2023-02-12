export default function ModelSelector() {
    return (
        <div className="flex flex-col gap-3">
            <span className="text-sm font-regular text-slate-800 dark:text-white">
                Model
            </span>
            <button
                className="
                border border-slate-200 rounded-sm
                px-3 py-2 w-full focus:outline-none focus:ring-2
                text-slate-800
                dark:text-white
                dark:bg-slate-900
                dark:border-slate-700
                font-regular
                text-sm
                bg-white
                text-left
            "
            >
                text-davinci-003
            </button>
        </div>
    );
}
