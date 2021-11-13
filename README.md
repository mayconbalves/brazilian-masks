# `brazilian-masks`

## Installation

You can install it with *npm* or *yarn*.

Try:

- *npm*: `npm install cpf`
- *yarn*: `yarn add cpf`

## Usage

```js
const cpfMask = require('brazilian-mask');
```

Now, `CPF` is a function to:

- `format`

#### Example

```js
cpfMask('11144477735');
//=> '111.444.777-35'
```

#### Parameters

- `cpf` {*string*} A CPF number.

Returns a string with the formatted CPF number.

## License

MIT &copy; Maycon Alves
