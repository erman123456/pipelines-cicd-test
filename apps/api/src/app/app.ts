import * as path from 'path';
import {FastifyInstance, FastifyRequest, FastifyReply} from 'fastify';
import AutoLoad from '@fastify/autoload';
import routes from "./routes";

/* eslint-disable-next-line */
export interface AppOptions {
}

export async function app(fastify: FastifyInstance, opts: AppOptions) {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: {...opts},
  });
  routes(fastify)
}
