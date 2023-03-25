
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
      article_name: {type: 'string'},
      description: {type: 'string'},
      newsId: {type: 'number'},
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
      article_name: {type: 'string'},
      description: {type: 'string'},
      newsId: {type: 'number'},
    },
  }
}
export const topicSchema = {
  schemaId,
  schemaBody,
  schemaEdit
}
