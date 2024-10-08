import { useEffect, useState } from 'react';

import getBook from '@utils/getBook';
import type { BookItem } from '_types/index';

const ids = [9791198686121];

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

function BookDetails() {
  const [data, setData] = useState<(BookItem | number)[]>([]);

  const getData = async () => {
    try {
      const response = await getBook(ids);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getData();
  }, []);

  return (
    <p className="break-words">
      {data.map(item => {
        if (item instanceof Object) {
          unnecessaryParams.forEach(param => delete item[param as keyof typeof item]);

          return <span key={item.title}>{JSON.stringify(item)},</span>;
        }
        return <span key={item}>{item},</span>;
      })}
    </p>
  );
}

export default BookDetails;
