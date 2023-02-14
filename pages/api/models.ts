import { openai } from '@/utils/openai';

export const config = {
    runtime: 'edge',
};

export default async function handler() {
    return await openai.listModels();
}
