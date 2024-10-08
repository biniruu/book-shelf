export interface BookDetails {
  version: string;
  logo: string;
  title: string;
  link: string;
  pubDate: string;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  query: string;
  searchCategoryId: number;
  searchCategoryName: string;
  item: BookItem[];
}

export interface BookItem extends Book {
  description?: string;
  isbn?: string;
  priceSales?: number;
  priceStandard?: number;
  stockStatus?: string;
  mileage?: number;
  salesPoint?: number;
  adult?: boolean;
  fixedPrice?: boolean;
  customerReviewRank?: number;
  seriesInfo?: {
    seriesId: number;
    seriesLink: string;
    seriesName: string;
  };
  subInfo?: {
    paperBookList: [
      {
        itemId: string;
        isbn: string;
        isbn13: string;
        priceSales: number;
        link: string;
      },
    ];
  };
}

export interface Book {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  isbn13: string;
  itemId: number;
  mallType: string;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
}
