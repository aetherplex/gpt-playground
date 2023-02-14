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
    } = (await req.json()) as any;
    // {
    //     prompt: string;
    //     temperature: string;
    //     max_tokens: string;
    //     presence_penalty: string;
    //     frequency_penalty: string;
    //     top_p: string;
    //     n: string;
    //     stream: string;
    //     model: string;
    // };

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

    const responseStream = await openAIStream(payload);
    return new Response(responseStream);
}
