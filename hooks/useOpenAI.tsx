import { settingsAtom } from '@/store';
import { useAtom } from 'jotai';
import { useState } from 'react';

interface Props {
    resultRef: any;
}

export default function useOpenAI({ resultRef }: Props) {
    const [settings] = useAtom(settingsAtom);
    const [response, setResponse] = useState<string>('');

    async function updatePrompt(prompt: string) {
        const fullPrompt = settings.startText.enabled
            ? `${prompt} ${settings.startText.text}`
            : prompt;
        const res = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: fullPrompt,
                model: settings.model,
                max_tokens: settings.maxTokens,
                temperature: settings.temperature,
                top_p: settings.topP,
                frequency_penalty: settings.frequencyPenalty,
                presence_penalty: settings.presencePenalty,
                stream: settings.stream,
                echo: true,
            }),
        });

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const data = res.body;
        if (!data) {
            return;
        }
        const reader = data.getReader();
        const decoder = new TextDecoder();
        let done = false;

        while (!done) {
            const { value, done: doneReading } = await reader.read();
            done = doneReading;
            const chunkValue = decoder.decode(value);
            console.log(chunkValue);
            setResponse((prev) => prev + chunkValue);
        }
    }

    return {
        updatePrompt,
        response,
        setResponse,
    };
}
