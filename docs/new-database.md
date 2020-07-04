---
id: new-database
title: new Database
---

Create a new database or recover from an exist database.


```ts
new Database(dbpath: string, options:DatabaseOptions):Database
```


### Example

```ts
import { Database } from 'rippledb'

const db = new Database('/path/to/db', {
  debug: true
});
```

### `dbpath`

The folder path for Database data dir. It can be either an absolute path like `/data/db` or relative path like `./db`.

### `DatabaseOptions`

|Field|Type|Default|Description|
|-|-|-|-|
|`debug`|`boolean`|`false`||
|`comparator`|`Comparator`|`Comparator`||
|`writeBufferSize`|`number`|`4194304`| Default is `4MB`|
|`maxFileSize`|`number`|`2097152`|Default is `2MB`|
|`maxOpenFiles`|`number`|`1000`||
|`blockCache`|`LRUCache<Buffer, Block>`|`new Cache<Buffer, Block>({max: 2048})`||
|`blockSize`|`number`|`4096`|Default is `4KB`|
|`blockRestartInterval`|`number`|`16`||
|`reuseLogs`|`boolean`|`false`||
|`filterPolicy`|`FilterPolicy`|`new BloomFilter()`|[`FilterPolicy`](#filterpolicy)|
|`lockfileStale`|`number`|`10000`|Default is `10s`|
|`infoLog`|`FileHandle`\|`null`|`FileHandle`||
|`log`|`(message: string) => Promise<void>`|`(msg) => this.infoLog.appendFile(msg)`||




### `FilterPolicy`


```ts
interface FilterPolicy {
  name(): string;
  keyMayMatch(key: Slice, filter: Slice): boolean;
}
```

