import cpfMask from './cpf-mask'

test('format cpf', () => (
	expect(cpfMask('11111111111'))
	.toBe('111.111.111-11')
))