
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
      topic_name: {type: 'string'},
      description: {type: 'string'},
      newsId: {type: 'string'},
    },
  }
}
const schemaEdit = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'news id'
      }
    }
  },
  body: {
    type: 'object',
    properties: {
      topic_name: {type: 'string'},
      description: {type: 'string'},
      newsId: {type: 'string'},
    },
  }
}
export const topicSchema = {
  schemaId,
  schemaBody,
  schemaEdit
}
