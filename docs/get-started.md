---
id: get-started
title: Get started
sidebar_label: Get started
---

## Get started

Use in JavaScript or TypeScript:

```js
const path = require('path')
const { Database } = require('rippledb') // install from npm

async function main(){
  const db = new Database(path.resolve(__dirname, './db'))
  await db.put('foo', 'bar')
  console.log(
    (await db.get('foo')).toString()
  ) // 'bar'
}

main()
```


For more details, see [documention](./docs/API.md)
