import { openAIStream } from '@/utils/openai';

export const config = {
    runtime: 'edge',
};

export default async function handler(req: Request) {
    const {
        prompt,
        temperature,
        max_tokens,
        presence_penalty,
        frequency_penalty,
        top_p,
        n,
        stream,
        model,
        apiKey,
    } = (await req.json()) as any;

    const payload = {
        model,
        prompt,
        temperature,
        top_p,
        frequency_penalty,
        presence_penalty,
        max_tokens,
        n,
        stream,
    };

    const responseStream = await openAIStream(payload, apiKey);
    return new Response(responseStream);
}
