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
                topic_name: {type: 'string'},
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
const filter = {
  querystring: {
    type: 'object',
    properties: {
      draft_status: {
        type: 'boolean',
        description: 'status of either ‘draft’, ‘deleted’ or ‘published’. Select true if publish'
      },
      topic_name: {
        type: 'string',
        description: 'Filter by Topic name'
      }
    }
  }
}
export const newsSchema = {
  schemaId,
  schemaBody,
  schemaEdit,
  filter
}
