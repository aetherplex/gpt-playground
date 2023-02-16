import { z } from 'zod';
import { prisma } from '../prisma';
import { procedure, router } from '../trpc';

export const AppRouter = router({
    submit: procedure
        .input(
            z.object({
                prompt: z.string(),
            })
        )
        .mutation(({ input }) => {
            return {};
        }),
    savePreset: procedure
        .input(
            z.object({
                name: z.string(),
                description: z.string().optional(),
                settings: z.object({
                    model: z.string(),
                    prompt: z.string(),
                    temperature: z.number(),
                    topP: z.number(),
                    frequencyPenalty: z.number(),
                    presencePenalty: z.number(),
                    bestOf: z.number(),
                    maxTokens: z.number(),
                    stopSequences: z.string().array(),
                    stream: z.boolean(),
                    logprobs: z.number(),
                    echo: z.boolean(),
                    n: z.number(),
                }),
            })
        )
        .mutation(async ({ input }) => {
            let vote = await prisma.preset.findUnique({
                where: {},
            });
        }),
});

export type AppRouter = typeof AppRouter;
