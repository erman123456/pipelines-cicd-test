import prisma from "../utils/prisma";

export async function createTopic(payload) {
  return prisma.topic.create({
    data: payload,
  });
}

export async function updateTopic(id: number, payload: any) {
  return prisma.topic.update({
    where: {id: id},
    data: payload
  })
}

export function findAll() {
  return prisma.topic.findMany({where: {deletedAt: null}})
}

export function findOne(id: number) {
  return prisma.topic.findFirst({
    where: {
      AND: [
        {id: id},
        {deletedAt: null}
      ]
    }
  });
}

export function remove(id: number) {
  return prisma.topic.update({
    where: {
      id: id,
    },
    data: {deletedAt: new Date()}
  });
}


