import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
    // Create procedure at path 'login'
    // The syntax is identical to creating queries
    submit: procedure
        // using zod schema to validate and infer input values
        .input(
            z.object({
                prompt: z.string(),
            })
        )
        .mutation(({ input }) => {
            return {};
        }),
});
