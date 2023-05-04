import { config } from "dotenv";
config();

import fastify from "fastify";

const app = fastify();

console.log('running')

app.listen({ port: parseInt(process.env.PORT!) });
