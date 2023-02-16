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

    getPresets: procedure
        .input(
            z.object({
                userId: z.number(),
            })
        )
        .query(async ({ input }) => {
            const presets = await prisma.preset.findMany({
                where: {
                    userId: input.userId,
                },
            });
            return presets;
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
            let preset = await prisma.preset.findUnique({
                where: {
                    presetIdentifier: {
                        name: input.name,
                        userId: 1,
                    },
                },
            });
            if (!preset) {
                preset = await prisma.preset.create({
                    data: {
                        name: input.name,
                        description: input.description,
                        model: input.settings.model,
                        prompt: input.settings.prompt,
                        temperature: input.settings.temperature,
                        top_p: input.settings.topP,
                        frequency_penalty: input.settings.frequencyPenalty,
                        presence_penalty: input.settings.presencePenalty,
                        best_of: input.settings.bestOf,
                        max_tokens: input.settings.maxTokens,
                        stop_sequences: input.settings.stopSequences,
                        n: input.settings.n,
                        user: {
                            connect: {
                                id: 1,
                            },
                        },
                    },
                });
            } else {
                preset = await prisma.preset.update({
                    where: {
                        id: preset.id,
                    },
                    data: {
                        description: input.description,
                        model: input.settings.model,
                        prompt: input.settings.prompt,
                        temperature: input.settings.temperature,
                        top_p: input.settings.topP,
                        frequency_penalty: input.settings.frequencyPenalty,
                        presence_penalty: input.settings.presencePenalty,
                        best_of: input.settings.bestOf,
                        max_tokens: input.settings.maxTokens,
                        stop_sequences: input.settings.stopSequences,
                        n: input.settings.n,
                    },
                });
            }
        }),
});

export type AppRouter = typeof AppRouter;
