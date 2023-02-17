import { atom } from 'jotai';

export interface InsertText {
    text: string;
    enabled: boolean;
}

export interface Preset {
    name: string;
    description: string;
    settings: CompletionParams;
}

interface CompletionParams {
    model: string;
    prompt: string;
    maxTokens: number;
    temperature: number;
    topP: number;
    frequencyPenalty: number;
    presencePenalty: number;
    stream: boolean;
    bestOf: number;
    n: number;
    echo: boolean;
    startText: InsertText;
    restartText: InsertText;
    stopSequences: string[];
    logprobs: number;
}

const initialState: CompletionParams = {
    echo: true,
    model: 'text-davinci-003',
    prompt: 'The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.',
    temperature: 0.7,
    maxTokens: 256,
    topP: 1,
    frequencyPenalty: 0,
    presencePenalty: 0,
    stream: true,
    bestOf: 1,
    n: 1,
    startText: {
        text: '',
        enabled: true,
    },
    restartText: {
        text: '',
        enabled: true,
    },
    stopSequences: [],
    logprobs: 0,
};

export const modelAtom = atom(initialState.model);
export const promptAtom = atom(initialState.prompt);
export const maxTokensAtom = atom(initialState.maxTokens);
export const temperatureAtom = atom(initialState.temperature);
export const topPAtom = atom(initialState.topP);
export const nAtom = atom(initialState.n);
export const frequencyPenaltyAtom = atom(initialState.frequencyPenalty);
export const presencePenaltyAtom = atom(initialState.presencePenalty);
export const stopSequencesAtom = atom(initialState.stopSequences);
export const bestOfAtom = atom(initialState.bestOf);
export const streamAtom = atom(initialState.stream);
export const startTextAtom = atom(initialState.startText);
export const restartTextAtom = atom(initialState.restartText);
export const logprobsAtom = atom(initialState.logprobs);

export const presetListAtom = atom<Preset[]>([]);
export const activeModelAtom = atom<string[]>([]);
export const apiKeyAtom = atom<string>('');

export const settingsAtom = atom<CompletionParams, any, any>(
    (get) => ({
        model: get(modelAtom),
        prompt: get(promptAtom),
        maxTokens: get(maxTokensAtom),
        temperature: get(temperatureAtom),
        topP: get(topPAtom),
        n: get(nAtom),
        frequencyPenalty: get(frequencyPenaltyAtom),
        presencePenalty: get(presencePenaltyAtom),
        bestOf: get(bestOfAtom),
        stream: get(streamAtom),
        echo: true,
        startText: get(startTextAtom),
        restartText: get(restartTextAtom),
        stopSequences: get(stopSequencesAtom),
        logprobs: get(logprobsAtom),
    }),
    (_get, set, newSettings: CompletionParams) => {
        set(modelAtom, newSettings.model);
        set(promptAtom, newSettings.prompt);
        set(maxTokensAtom, newSettings.maxTokens);
        set(temperatureAtom, newSettings.temperature);
        set(topPAtom, newSettings.topP);
        set(nAtom, newSettings.n);
        set(frequencyPenaltyAtom, newSettings.frequencyPenalty);
        set(presencePenaltyAtom, newSettings.presencePenalty);
        set(bestOfAtom, newSettings.bestOf);
        set(streamAtom, newSettings.stream);
        set(startTextAtom, newSettings.startText);
        set(restartTextAtom, newSettings.restartText);
        set(stopSequencesAtom, newSettings.stopSequences);
        set(logprobsAtom, newSettings.logprobs);
    }
);
