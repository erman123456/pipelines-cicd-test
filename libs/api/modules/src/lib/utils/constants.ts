
export enum HttpStatusTransaction {
  CODE_SUCCESS = 200,
  CODE_NOT_FOUND = 404,
  CODE_SERVER_ERROR = 500
}

export class ResponseType {
  status: number
  message: string
  payload: any
}
