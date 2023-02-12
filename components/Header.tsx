import Button from './Button';

export default function Header() {
    return (
        <div
            className="w-full px-7 py-4 border-b flex justify-between items-center dark:bg-slate-800
            border-slate-200 dark:border-slate-700
        "
        >
            <h1 className="font-medium text-lg text-slate-800 dark:text-white">
                Playground
            </h1>
            <div className="flex items-center gap-3">
                <input
                    placeholder="Load a preset..."
                    className="border border-slate-200 rounded-sm
                    px-3 py-1 w-64 focus:outline-none focus:ring-2
                    text-slate-400
                    text-sm
                    dark:bg-slate-900
                    dark:border-slate-700
                    "
                />

                <Button intent="secondary">Save</Button>
                <Button intent="secondary">View code</Button>
                <Button intent="secondary">Share</Button>
                <Button intent="secondary">...</Button>
            </div>
        </div>
    );
}
