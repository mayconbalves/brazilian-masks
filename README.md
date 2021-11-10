# Example

```shell
$ npm install brazilian-mask --save
```

```shell
$ yarn add brazilian-mask
```

```javascript
const { cpfMask } = require('sensitive-words')

// ES2015 modules
import { cpfMask } from 'sensitive-words'

const mask = cpfMask('11111111111')

console.log(mask)
// 111.111.111-11
```
