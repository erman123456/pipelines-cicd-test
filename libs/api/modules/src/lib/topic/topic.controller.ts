import {FastifyReply, FastifyRequest} from "fastify";
import {HttpStatusTransaction, ResponseType} from "../utils/constants";
import {createTopic, findAll, findOne, remove, updateTopic} from "./topic.service";

const responseType = new ResponseType()

export async function createTopicHandler(
  request: FastifyRequest, reply: FastifyReply) {
  const body = request.body;
  console.log(body)
  try {
    const data = await createTopic(body);


    console.log("success", data)
    responseType.status = HttpStatusTransaction.CODE_SUCCESS
    responseType.message = "Success"
    responseType.payload = data
    return reply.code(HttpStatusTransaction.CODE_SUCCESS).send(responseType);
  } catch (e) {

    console.log("gagal", e)
    responseType.status = HttpStatusTransaction.CODE_SERVER_ERROR
    responseType.message = "Fail"
    responseType.payload = e
    return reply.code(HttpStatusTransaction.CODE_SERVER_ERROR).send(responseType);
  }
}

export async function updateTopicHandler(
  request: any, reply: FastifyReply) {
  const body = request.body;
  const id = parseInt(request.params.id);
  try {
    const data = await updateTopic(id, body);
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
    console.log("masuk sini")
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
