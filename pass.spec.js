it('will pass in jsdom', () => {
  const fn = jest.fn(x => x * 2);

  expect(fn.mock.returnValues).toEqual([]);

  fn(1);
  fn(2);

  expect(fn.mock.returnValues).toEqual([2, 4]);
});