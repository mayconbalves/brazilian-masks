import { cnpjMask } from '../src'

describe('cnpj mask', () => {
  test('should be format cnpj correctly', () =>
    expect(cnpjMask('111111111111111')).toBe('11.111.111/1111-11'))

  test('not receive letters', () => expect(cnpjMask('abcdefghijklmn')).toBe(''))
})
