import {FastifyInstance} from 'fastify';
import routes from "./routes"
import {buildJsonSchemas, register} from "fastify-zod"
import {models} from "fastify-zod/build/__tests__/models.fixtures";

/* eslint-disable-next-line */
export interface AppOptions {
}

export async function app(fastify: FastifyInstance, opts: AppOptions) {
  await register(fastify, {
    jsonSchemas: buildJsonSchemas(models),
    swaggerOptions: {
      routePrefix: `/swagger`,
      swagger: {
        info: {
          title: `Fastify Tes Server`,
          description: `Technical tes create api News article & Topic with Fastify NX Monorepo`,
          version: "1.0.0",
        },
      },
      staticCSP: true,
      exposeRoute: true,
      transformSpec: {
        /* see below */
      },
    },
  });

  routes(fastify)
}
