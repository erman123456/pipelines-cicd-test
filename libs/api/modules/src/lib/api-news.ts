import {FastifyPluginAsync} from 'fastify'

export const apiNews: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return {tes: false}
  })
}
