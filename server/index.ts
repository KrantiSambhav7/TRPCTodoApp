import { publicProcedure, router } from "./trpc";
import {z} from "zod";

const appRouter = router({
    createTodo: publicProcedure.input(
        z.object({
            title: z.string(),
            description: z.string()
        })
    ).mutation(async (opts)=> {
        const title = opts.input.title;
        const description = opts.input.description;
        
    })
})

export type AppRouter = typeof appRouter;