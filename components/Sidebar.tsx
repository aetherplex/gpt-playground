import InjectText from './InjectText';
import ModelSelector from './ModelSelector';
import ModeSelector from './ModeSelector';
import RangeSlider from './RangeSlider';
import ShowProbabilities from './ShowProbabilities';
import StopSequences from './StopSequences';

export default function Sidebar() {
    return (
        <div className="flex flex-col gap-6 w-full">
            <ModeSelector />
            <ModelSelector />
            <RangeSlider label="Temperature" defaultValue={0.7} />
            <RangeSlider
                label="Maximum length"
                min={1}
                max={4000}
                defaultValue={256}
                step={1}
            />
            <StopSequences />
            <RangeSlider label="Top P" defaultValue={0} max={2} />
            <RangeSlider label="Frequency penalty" defaultValue={0} max={2} />
            <RangeSlider
                label="Best of"
                min={1}
                max={20}
                step={1}
                defaultValue={1}
            />
            <InjectText type="start" />
            <InjectText type="restart" />
            <ShowProbabilities />
        </div>
    );
}
