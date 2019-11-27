import omitDeep from 'omit-deep'

export const omitTaskPage = list =>
  list.map(i =>
    omitDeep(i, [
      'base64min',
      'documentId',
      'nodeType',
      'isTyped',
      'uploaded',
      'contentUrl',
      'expectedProductTypes',
      '__typename',
    ]),
  )
