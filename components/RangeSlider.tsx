'use client';

interface Props {
    value: number;
    setValue: (value: number) => void;
    label: string;
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
}

export default function RangeSlider({
    label,
    min = 0,
    max = 1,
    step = 0.01,
    value,
    setValue,
}: Props) {
    return (
        <div className="flex flex-col gap-1">
            <div
                className="flex justify-between items-center
            text-slate-800 dark:text-white
            "
            >
                <span className="text-sm font-regular">{label}</span>
                <span className="text-sm font-regular">{value}</span>
            </div>
            <div className="w-full relative">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    defaultValue={value}
                    className="w-full slider relative"
                    dir="ltr"
                    onChange={(e) => {
                        setValue(e.target.valueAsNumber);
                    }}
                />

                <div
                    className="absolute left-0 h-1 flex items-center bg-slate-400 z-20 track"
                    style={{
                        width: `${(value / max) * 100}%`,
                    }}
                />
                <div className="absolute left-0 h-1 flex items-center bg-slate-700 z-10 w-full track" />
            </div>
        </div>
    );
}
