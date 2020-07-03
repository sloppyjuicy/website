---
id: new-database
title: new Database
---


```ts
new Database(dbpath: string: options:DatabaseOptions):Database
```


Example:

```ts
import { Database } from 'rippledb'

const db = new Database('/path/to/db', {
  debug: true
});
```


### DatabaseOptions

|Field|Type|Default|Description|
|-|-|-|-|
|`debug`|`boolean`|`false`||

Create a new database or recover from an exist database.
