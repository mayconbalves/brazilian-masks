# Example

```shell
$ npm install brazilian-mask --save
```

```javascript
const { cpfMask } = require('brazilian-mask')

// ES2015 modules
import { cpfMask } from 'brazilian-mask'

const mask = cpfMask('11111111111')

console.log(mask)
// 111.111.111-11
```
