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
      title: {type: 'string'},
      description: {type: 'string'},
    },
  }
}
export const newsSchema = {
  schemaId,
  schemaBody,
  schemaEdit
}
