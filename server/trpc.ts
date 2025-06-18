import { initTRPC } from "@trpc/server";
const t = initTRPC.create(); 
export const router = t.router; // Create a router. This is similar to the app router in Express or Fastify.
export const publicProcedure = t.procedure; // Create a public procedure



