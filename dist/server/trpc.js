"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicProcedure = exports.router = void 0;
const server_1 = require("@trpc/server");
const t = server_1.initTRPC.create();
exports.router = t.router; // Create a router. This is similar to the app router in Express or Fastify.
exports.publicProcedure = t.procedure; // Create a public procedure
