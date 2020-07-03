---
id: db-ok
title: ok
---


```ts
ok():Promise<boolean>
```

Database maybe in recovering state after creation. When db recovering, `get` or `put` method is not aviabile. 
`ok` can help you know when db is ready to `get` or `put` data.

