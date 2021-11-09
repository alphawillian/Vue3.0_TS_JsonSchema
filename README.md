<!--
 * @Author: willian126@126.com
 * @Description: Vue3.0+TS+JsonSchema 打造企业级组件库
 * @Date: 2021-11-04 13:43:55
 * @LastEditors: willian126@126.com
 * @LastEditTime: 2021-11-09 17:26:56
-->

# Vue3.0_TS_JsonSchema

Vue3.0+TS+JsonSchema 打造企业级组件库

跟随慕课网课程 [Vue3.0+TS 打造企业级组件库 前端中高级开发者必修课](https://coding.imooc.com/class/466.html) 学习。

# API 设计

```jsx
<JsonSchemaForm
  schema={schema}
  value={value=}
  onChange={handleChange}
  locale={locale}
  contextRef={someRef}
  uiSchema={uiSchema}
/>
```

### shcma

json schema 对象，用来定义数据，同时也是我们定义表单的依据

### value

表单的数据结构，你可以从外部改变这个 value,在表单被编辑的时候，会通过`conchange`透出 value

需要注意的是，因为 vue 使用的是可变数据，如果每次数据变化我们都去改变`value`的对象地址，那么会导致整个表单都需要重新渲染，这会导致性能降低。
从实践中来看，我们传入的对象，在内部修改器 field 的值基本不会有什么副作用，所以我们会使用这种方式进行实现。也就是说：如果`value`是一个对象，那么从`JsonSchemaForm`内部修改的值，并不会改变`value`对象本身。我们仍然会触发`onChange`,因为可能在表单变化之后，使用者需要进行一些操作。

### onchange

在表单值有任何变化的时候会触发该回调方法，并把新的值进行返回

### locale

本地化语言，使用`ajv-i18n`指定错误信息使用的语言

### contextRef

你需要传入一个 vue3 的`Ref`对象，我们会在这个对象上挂载`doValidate`方法，你可以通过

```ts
const yourRef = ref({})
onMounted(() => {
  yourRef.value.doValidate()
})
<JsonSchemaForm contextRef={yourRef} />
```

这样来主动让表单进行校验。

### uiSchema

对表单的展示进行一些定制，期数据类型如下：

```ts
export interface VueJsonSchemaConfig {
  title?: string;
  description?: string;
  component?: string;
  additionProps?: {
    [key: string]: any;
  };
  withFormItem?: boolean;
  widget?: "checkbox" | "textarea" | "select" | "radio" | "range" | string;
  items?: UISchema | UISchema[];
}
export interface UISchema extends VueJsonSchemaConfig {
  properties?: {
    [property: string]: UISchema;
  };
}
```
