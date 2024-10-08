import stubBookDetails from '../mocks/apis/stubBookDetails';
import book from '../mocks/book';

test('should return an array that contains book details', async () => {
  const ids = [9791198686121];
  const expected = await stubBookDetails(ids);

  expect(expected).toEqual([book]);
});

test('should return an array that contains the number as a parameter', async () => {
  const ids = [9788925526355];
  const expected = await stubBookDetails(ids);

  expect(expected).toEqual(ids);
});

test('should return an array that contains the both that are book details and the number as a parameter', async () => {
  const ids = [9791198686121, 9788925526355];
  const expected = await stubBookDetails(ids);

  expect(expected).toEqual([book, 9788925526355]);
});
