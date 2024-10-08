'use server';

import type { BookDetails } from '_types/index';

const getBookDetails = async (id: number) => {
  const response = await fetch(
    `${process.env.BASE_URL}/ttb/api/ItemLookUp.aspx?ttbkey=${process.env.ITEM_LIST}&ItemIdType=ISBN13&Version=20131101&output=js&ItemId=${id}`,
    { method: 'GET', redirect: 'follow' },
  );
  const result = (await response.json()) as BookDetails;

  return result;
};

export default getBookDetails;
