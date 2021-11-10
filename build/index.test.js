"use strict";

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('format cpf', () => expect((0, _.default)('11111111111')).toBe('111.111.111-11'));