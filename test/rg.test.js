import { rgMask } from '../src'

describe('rg mask', () => {
  it('should be format rg correctly', () =>
    expect(rgMask('111111111')).toBe('11.111.111-1'))

  it('dont receive letters', () => expect(rgMask('abcdefghi')).toBe(''))
})
