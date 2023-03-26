import prisma from "../utils/prisma";

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

export function findAll() {
  return prisma.news.findMany(
    {
      where: {deletedAt: null},
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


