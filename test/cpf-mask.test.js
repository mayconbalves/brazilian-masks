import cpfMask from '../src/cpf-mask'

describe('cpf mask', () => {
	test('should be format cpf correctly', () => (
		expect(cpfMask('11111111111')).toBe('111.111.111-11')
	))

	test('not receive letters', () => (
		expect(cpfMask('abcdefg')).toBe('')
	))

	test('should be format correctly cpf number', () => (
		expect(cpfMask('11111111111')).not.toBe('111.111.11111')
	))
})