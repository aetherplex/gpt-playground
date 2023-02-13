import {
    bestOfAtom,
    frequencyPenaltyAtom,
    maxTokensAtom,
    temperatureAtom,
    topPAtom,
} from '@/store';
import { useAtom } from 'jotai';
import InjectText from './InjectText';
import ModelSelector from './ModelSelector';
import ModeSelector from './ModeSelector';
import RangeSlider from './RangeSlider';
import ShowProbabilities from './ShowProbabilities';
import StopSequences from './StopSequences';

export default function Sidebar() {
    const [temperature, setTemperature] = useAtom(temperatureAtom);
    const [maxLen, setMaxLen] = useAtom(maxTokensAtom);
    const [topP, setTopP] = useAtom(topPAtom);
    const [frequencyPenalty, setFrequencyPenalty] =
        useAtom(frequencyPenaltyAtom);
    const [bestOf, setBestOf] = useAtom(bestOfAtom);

    return (
        <div className="flex flex-col gap-6 w-full">
            <ModeSelector />
            <ModelSelector />
            <RangeSlider
                label="Temperature"
                defaultValue={0.7}
                value={temperature}
                setValue={setTemperature}
            />
            <RangeSlider
                value={maxLen}
                setValue={setMaxLen}
                label="Maximum length"
                min={1}
                max={4000}
                defaultValue={256}
                step={1}
            />
            <StopSequences />
            <RangeSlider
                label="Top P"
                defaultValue={0}
                max={2}
                value={topP}
                setValue={setTopP}
            />
            <RangeSlider
                label="Frequency penalty"
                defaultValue={0}
                max={2}
                value={frequencyPenalty}
                setValue={setFrequencyPenalty}
            />
            <RangeSlider
                label="Best of"
                min={1}
                max={20}
                step={1}
                defaultValue={1}
                value={bestOf}
                setValue={setBestOf}
            />
            <InjectText type="start" />
            <InjectText type="restart" />
            <ShowProbabilities />
        </div>
    );
}
