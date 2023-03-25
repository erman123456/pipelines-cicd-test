import {FastifyReply, FastifyRequest} from "fastify";
import {createNews, findAll, findOne, remove, updateNews,} from "./news.service";
import {HttpStatusTransaction, ResponseType} from "../utils/constants";

const responseType = new ResponseType()

export async function createNewsHandler(
  request: FastifyRequest, reply: FastifyReply) {
  const body = request.body;
  try {
    const data = await createNews(body);
    responseType.status = HttpStatusTransaction.CODE_SUCCESS
    responseType.message = "Success"
    responseType.payload = data
    return reply.code(HttpStatusTransaction.CODE_SUCCESS).send(responseType);
  } catch (e) {
    responseType.status = HttpStatusTransaction.CODE_SERVER_ERROR
    responseType.message = "Fail"
    responseType.payload = e
    return reply.code(HttpStatusTransaction.CODE_SERVER_ERROR).send(responseType);
  }
}

export async function updateNewsHandler(
  request: any, reply: FastifyReply) {
  const body = request.body;
  const id = parseInt(request.params.id);
  try {
    const data = await updateNews(id, body);
    responseType.status = HttpStatusTransaction.CODE_SUCCESS
    responseType.message = "Success"
    responseType.payload = data
    return reply.code(HttpStatusTransaction.CODE_SUCCESS).send(responseType);
  } catch (e) {
    responseType.status = HttpStatusTransaction.CODE_SERVER_ERROR
    responseType.message = "Fail"
    responseType.payload = e
    return reply.code(HttpStatusTransaction.CODE_SERVER_ERROR).send(responseType);
  }
}

export async function findAllHandler(reply: FastifyReply) {
  try {
    const data = await findAll();
    responseType.status = HttpStatusTransaction.CODE_SUCCESS
    responseType.message = "Success"
    responseType.payload = data
    return reply.code(HttpStatusTransaction.CODE_SUCCESS).send(responseType);
  } catch (e) {
    responseType.status = HttpStatusTransaction.CODE_SERVER_ERROR
    responseType.message = "Fail"
    responseType.payload = e
    return reply.code(HttpStatusTransaction.CODE_SERVER_ERROR).send(responseType);
  }
}

export async function findOneHandler(id: number, reply: FastifyReply) {
  try {
    const data = await findOne(id);
    responseType.status = HttpStatusTransaction.CODE_SUCCESS
    responseType.message = "Success"
    responseType.payload = data
    return reply.code(HttpStatusTransaction.CODE_SUCCESS).send(responseType);
  } catch (e) {
    responseType.status = HttpStatusTransaction.CODE_SERVER_ERROR
    responseType.message = "Fail"
    responseType.payload = e
    return reply.code(HttpStatusTransaction.CODE_SERVER_ERROR).send(responseType);
  }
}

export async function deleteHandler(id: number, reply: FastifyReply) {
  try {
    await remove(id);
    responseType.status = HttpStatusTransaction.CODE_SUCCESS
    responseType.message = "Success"
    return reply.code(HttpStatusTransaction.CODE_SUCCESS).send(responseType);
  } catch (e) {
    responseType.status = HttpStatusTransaction.CODE_SERVER_ERROR
    responseType.message = e
    return reply.code(HttpStatusTransaction.CODE_SERVER_ERROR).send(responseType);
  }
}