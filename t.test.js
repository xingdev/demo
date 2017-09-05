test('t', () => {
  var t = require('./t')
  var a = t()
  expect(a).toEqual('af')
})