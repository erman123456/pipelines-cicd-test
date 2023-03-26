import {FastifyInstance, FastifyPluginAsync, FastifyRequest} from 'fastify'
import {createNewsHandler, deleteHandler, findAllHandler, findOneHandler, updateNewsHandler} from "./news.controller";
import {newsSchema} from "./news.schema";

export const apiNews: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.post(
    "/",
    {
      schema: newsSchema.schemaBody
    },
    (request, reply) => {
      return createNewsHandler(request, reply)
    }
  );
  fastify.put(
    "/:id",
    {
      schema: newsSchema.schemaEdit
    },
    (request, reply) => {
      return updateNewsHandler(request, reply)
    }
  );
  fastify.get(
    "/",
    (request, reply) => findAllHandler(reply)
  );
  fastify.get(
    "/:id",
    {
      schema: newsSchema.schemaId
    },
    (request: any, reply) => {
      const id = request.params.id;
      findOneHandler(id, reply);
    }
  );
  fastify.delete(
    "/:id",
    {
      schema: newsSchema.schemaId
    },
    (request: any, reply) => {
      const id = request.params.id;
      deleteHandler(id, reply);
    }
  );
}
