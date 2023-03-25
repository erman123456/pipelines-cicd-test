import {FastifyPluginAsync} from 'fastify'

export const apiTopic: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return {root: true}
  })
}
