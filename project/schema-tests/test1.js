/*
 * @Author: willian126@126.com
 * @Description: json-schema测试文件
 * @Date: 2021-11-05 10:23:22
 * @LastEditors: willian126@126.com
 * @LastEditTime: 2021-11-05 15:15:57
 */
const Ajv = require("ajv")
const addFormats = require("ajv-formats")
const localize = require("ajv-i18n")
// const schema = {
//   type: 'string',
//   minLength: 10
// }
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      test: false
      // minLength: 10,
      // format: 'test',
    },
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    isWorker: {
      type: 'boolean',
    },
  },
  required: ['age']
}
const ajv = new Ajv()
addFormats(ajv)
// ajv.addFormat('test', (data) => {
//   console.log(data, '```````````')
//   return data === 'haha'
// })
ajv.addKeyword('test', {
  macro (schema, parentSchema) {
    return {
      minLength: 10
    }
  }

  // compile (schema, parentSchema) {
  //   console.log(schema, parentSchema)
  //   return () => true
  // }

  // validate(schema, data) {
  //   console.log(schema, data )
  //   if (schema === true) {
  //     return true
  //   } else {
  //     return data.length === 6
  //   }
  // }
})
const validate = ajv.compile(schema)
// const valid = validate('Jokcy11111')
const valid = validate({
  name: 'hahaha',
  age: 28,
  // pets:['cat', 'dog'],
  isWorker: true
})
if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors)
} 
