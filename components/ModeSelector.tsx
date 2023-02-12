import Button from './Button';
import IconButton from './IconButton';
import SvgCompleteMode from './icons/CompleteMode';
import SvgEditMode from './icons/EditMode';
import SvgInsertMode from './icons/InsertMode';
import SvgRegenerate from './icons/Regenerate';
import SvgShowHistory from './icons/ShowHistory';
import SvgUndoLast from './icons/UndoLast';

export default function ModeSelector() {
    return (
        <div className="flex flex-col gap-3">
            <span
                className="text-sm font-regular
            text-slate-800 dark:text-white
            "
            >
                Mode
            </span>
            <div className="flex gap-1 w-full">
                <IconButton intent="secondary" size="md" fullWidth>
                    <SvgCompleteMode
                        width={20}
                        height={20}
                        className="fill-slate-800 dark:fill-white"
                    />
                </IconButton>
                <IconButton intent="secondary" size="md" fullWidth>
                    <SvgInsertMode width={20} height={20} />
                </IconButton>
                <IconButton intent="secondary" size="md" fullWidth>
                    <SvgEditMode width={20} height={20} />
                </IconButton>
            </div>
        </div>
    );
}
