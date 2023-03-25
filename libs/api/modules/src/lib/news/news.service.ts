import prisma from "../utils/prisma";

export async function createNews(payload) {
  return prisma.news.create({
    data: payload,
  });
}

export async function updateNews(id: number, payload: any) {
  return prisma.news.update({
    where: {id: id},
    data: payload
  })
}

export function findAll() {
  return prisma.news.findMany({where: {deletedAt: null}})
}

export function findOne(id: number) {
  return prisma.news.findFirst({
    where: {
      AND: [
        {id: id},
        {deletedAt: null}
      ]
    }
  });
}

export function remove(id: number) {
  return prisma.news.update({
    where: {
      id: id,
    },
    data: {deletedAt: new Date()}
  });
}


