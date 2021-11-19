# `brazilian-masks`

## Installation

You can install it with *npm* or *yarn*.

Try:

- *npm*: `npm install brazilian-masks`
- *yarn*: `yarn add brazilian-masks`

## Usage

```js
const { maskName } = require('brazilian-mask')
```

#### Example

```js
const { cpfMask } = require('brazilian-mask')
cpfMask('11144477735') //=> '111.444.777-35'
```

```js
const { cnpjMask } = require('brazilian-mask')
cnpjMask('13093488000190') //=> '13.093.488/0001-90'
```

```js
const { cepMask } = require('brazilian-mask')
cepMask('29050425') //=> '29050-425'
```

```js
const { rgMask } = require('brazilian-mask')
rgMask('423198373') //=> '42.319.837-3'
```

## License

MIT &copy; Maycon Alves
