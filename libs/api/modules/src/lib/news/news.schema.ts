import {any} from "zod";
import {topicSchema} from "../topic/topic.schema";

const schemaId = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'news id'
      }
    }
  }
}
const schemaBody = {
  body: {
    type: 'object',
    properties: {
      title: {type: 'string'},
      description: {type: 'string'},
      topic: {
        type: 'object',
        properties: {
          create: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                article_name: {type: 'string'},
                description: {type: 'string'},
              },
            },
          }
        }
      }
    },
  }
}
const schemaEdit = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'news id',
      }
    }
  },
  body: {
    type: 'object',
    properties: {
      title: {type: 'string'},
      description: {type: 'string'},
      topic: {
        type: 'object',
        properties: {
          connect: {
            type: 'object',
            properties: {
              id: {type: 'string'},
            },
          },
        }
      }
    }
  },
}
export const newsSchema = {
  schemaId,
  schemaBody,
  schemaEdit
}
