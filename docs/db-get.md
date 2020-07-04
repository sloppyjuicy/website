---
id: db-get
title: get
---


Get record from db. 

```ts
async get(key:string | Uint8Array, options:ReadOptions):Promise<Uint8Array>
```

### Example

```ts
const db = new Database()
const value = await db.get('key')
console.log(new TextDecoder().decode(value))
```

### `key`

### `ReadOptions`


|Field|Type|Default|Description|
|-|-|-|-|
|||||
