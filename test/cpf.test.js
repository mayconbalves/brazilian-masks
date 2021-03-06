import { cpfMask } from '../src'

describe('cpf mask', () => {
  it('should be format cpf correctly', () =>
    expect(cpfMask('11111111111')).toBe('111.111.111-11'))

  it('not receive letters', () => expect(cpfMask('abcdefg')).toBe(''))

  it('should be format correctly cpf number', () =>
    expect(cpfMask('11111111111')).not.toBe('111.111.11111'))
})
