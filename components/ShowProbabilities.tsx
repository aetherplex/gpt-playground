export default function ShowProbabilities() {
    return (
        <div className="flex flex-col gap-3">
            <span
                className="text-sm font-regular
                  text-slate-800 dark:text-white
            "
            >
                Show probabilities
            </span>
            <button
                className="
                border border-slate-200 rounded-sm
                px-3 py-2 w-full focus:outline-none focus:ring-2
                    dark:bg-slate-900
                    dark:border-slate-700
                text-slate-800 dark:text-white
                font-regular
                text-sm
                text-left
                bg-white
                "
            >
                Off
            </button>
        </div>
    );
}
