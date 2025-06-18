import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"; // This library will be used everywhere like in Next, React etc. 
import type { AppRouter } from "../server/index";

const trpc = createTRPCProxyClient<AppRouter>({ // This is a client variable that will be used to call the server methods
    links: [
        httpBatchLink({
            url: "http://localhost:3000"
        })
    ]
});

async function helloWorld() {
    const res = await trpc.createTodo.mutate({
        title: "My first todo",
        description: "This is a description of my first todo"
    });
    console.log(res)
}
helloWorld();
