---
id: get-started
title: Get started
sidebar_label: Get started
---

## Install

Install with npm:

```
npm install rippledb
```

Install with Yarn:

```
yarn add rippledb
```

## Useage

Use in JavaScript or TypeScript:

```ts
import path from 'path'
import { Database } from 'rippledb'

async function main(){
  const db = new Database(path.resolve(__dirname, './db'))
  await db.put('foo', 'bar')
  console.log(
    new TextDecoder().decode(await db.get('foo'))
  ) // 'bar'
}

main()
```

## Documention

[API](./new-database)

