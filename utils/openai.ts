import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    organization: 'org-nnPxuudBkpQ2bXzW679Y1lFK',
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);

export const models = ['ada', 'babbage', 'curie', 'davinci'].map((model) => {
    return {
        id: `text-${model}-003`,
        name: `text-${model}-003`,
    };
});
