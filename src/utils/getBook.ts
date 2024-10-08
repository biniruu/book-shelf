import getBookDetails from '@apis/book';

const unnecessaryParams = [
  'isbn',
  'priceSales',
  'priceStandard',
  'stockStatus',
  'mileage',
  'salesPoint',
  'adult',
  'fixedPrice',
  'customerReviewRank',
  'seriesInfo',
  'subInfo',
  'description',
];

const getBook = async (ids: number[]) => {
  try {
    const response = await Promise.all(
      ids.map(async id => {
        const data = await getBookDetails(id);
        const result = data.item?.[0];
        if (result) {
          unnecessaryParams.forEach(param => delete result[param as keyof typeof result]);

          return result;
        }
        return id;
      }),
    );

    return response;
  } catch (error) {
    const err = error as Error;

    throw new Error(err.message);
  }
};

export default getBook;
