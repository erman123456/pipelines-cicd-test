import {FastifyInstance, FastifyPluginAsync, FastifyRequest} from 'fastify'
import {
  createTopicHandler,
  deleteHandler,
  findAllHandler,
  findOneHandler,
  updateTopicHandler
} from "./topic.controller";
import {topicSchema} from "./topic.schema";

export const apiTopic: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.post(
    "/",
    {
      schema: topicSchema.schemaBody
    },
    (request, reply) => {
      return createTopicHandler(request, reply)
    }
  );
  fastify.put(
    "/:id",
    {
      schema: topicSchema.schemaEdit
    },
    (request, reply) => {
      return updateTopicHandler(request, reply)
    }
  );
  fastify.get(
    "/",
    (request, reply) => findAllHandler(reply)
  );
  fastify.get(
    "/:id",
    {
      schema: topicSchema.schemaId
    },
    (request: any, reply) => {
      const id = request.params.id;
      findOneHandler(id, reply);
    }
  );
  fastify.delete(
    "/:id",
    {
      schema: topicSchema.schemaId
    },
    (request: any, reply) => {
      const id = request.params.id;
      deleteHandler(id, reply);
    }
  );
}
