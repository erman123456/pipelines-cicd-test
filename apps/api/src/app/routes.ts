import {FastifyInstance} from "fastify";
import {
  apiNews,
  apiTopic
} from "@fastify-nx-technical-test/api/modules"

export default function routes(fastify: FastifyInstance) {
  fastify.register(apiNews, {prefix: "api/news"});
  fastify.register(apiTopic, {prefix: "api/topic"});
}
