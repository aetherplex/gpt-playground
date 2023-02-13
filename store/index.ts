import { atom } from 'jotai';

interface CompletionParams {
    model: string;
    prompt: string;
    maxTokens: number;
    temperature: number;
    topP: number;
    n: number;
    frequencyPenalty: number;
    presencePenalty: number;
    stop: string[];
    bestOf: number;
}

const initialState: CompletionParams = {
    model: 'text-davinci-003',
    prompt: 'The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.',
    maxTokens: 100,
    temperature: 0.9,
    topP: 1,
    n: 1,
    frequencyPenalty: 0,
    presencePenalty: 0,
    stop: ['\n', ' Human:', ' AI:'],
    bestOf: 1,
};

export const modelAtom = atom(initialState.model);
export const promptAtom = atom(initialState.prompt);
export const maxTokensAtom = atom(initialState.maxTokens);
export const temperatureAtom = atom(initialState.temperature);
export const topPAtom = atom(initialState.topP);
export const nAtom = atom(initialState.n);
export const frequencyPenaltyAtom = atom(initialState.frequencyPenalty);
export const presencePenaltyAtom = atom(initialState.presencePenalty);
export const stopAtom = atom(initialState.stop);
export const bestOfAtom = atom(initialState.bestOf);

export const settingsAtom = atom<CompletionParams>((get) => ({
    model: get(modelAtom),
    prompt: get(promptAtom),
    maxTokens: get(maxTokensAtom),
    temperature: get(temperatureAtom),
    topP: get(topPAtom),
    n: get(nAtom),
    frequencyPenalty: get(frequencyPenaltyAtom),
    presencePenalty: get(presencePenaltyAtom),
    stop: get(stopAtom),
    bestOf: get(bestOfAtom),
}));
