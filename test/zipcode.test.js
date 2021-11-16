import { cepMask } from "../src"

describe('cep mask', () => {
  test('should be format cep correctly', () => (

    expect(cepMask('03564000')).toBe('03564-000')
  ))

  test('not receive letters', () => (

    expect(cepMask('abcdef')).toBe('')
  ))
})
