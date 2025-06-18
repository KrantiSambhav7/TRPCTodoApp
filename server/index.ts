import { publicProcedure, router } from "./trpc";
import {z} from "zod";
import {createHTTPServer} from "@trpc/server/adapters/standalone"

const appRouter = router({
    createTodo: publicProcedure.input(
        z.object({
            title: z.string(),
            description: z.string()
        })
    ).mutation(async (opts)=> {
        const title = opts.input.title;
        const description = opts.input.description;
        // DB
        return {
            title: title,
            description: description,
            "Message": "Todo created successfully"
        }
    })
})

const server = createHTTPServer({
    router: appRouter
})
server.listen(3000);

export type AppRouter = typeof appRouter; // Useful for type safety in client code