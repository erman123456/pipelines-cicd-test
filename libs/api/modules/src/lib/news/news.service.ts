import prisma from "../utils/prisma";
import * as fastify from "fastify";
import {FastifyRequest} from "fastify";

export async function createNews(payload) {
  return prisma.news.create({
    data: payload,
    include: {
      topic: true
    }
  });
}

export async function updateNews(id: string, payload: any) {
  return prisma.news.update({
    where: {id: id},
    data: payload,
    include: {
      topic: true
    }
  })
}

export function findAll(request: any) {
  const draft_status: boolean = request?.draft_status
  const topic_name: string = request?.topic_name
  if (draft_status) {
    return prisma.news.findMany({
      where: {
        deletedAt: null,
        topic: {
          some: {
            topic_name: topic_name
          }
        }
      },
      include: {
        topic: true
      }
    })
  }
  return prisma.news.findMany({
    where: {
      NOT: {deletedAt: null},
      topic: {
        some: {
          topic_name: topic_name
        }
      }
    },
    include: {
      topic: true
    }
  })
}

export function findOne(id: string) {
  return prisma.news.findFirst({
    where: {
      AND: [
        {id: id},
        {deletedAt: null}
      ]
    },
    include: {
      topic: true
    }
  });
}

export function remove(id: string) {
  return prisma.news.update({
    where: {
      id: id,
    },
    data: {deletedAt: new Date()}
  });
}


