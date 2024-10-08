import book from '../book';

const stubBookDetails = (ids: number[]) => {
  return new Promise((resolve, reject) => {
    const result = ids.map(id => (id === 9791198686121 ? book : id));

    return result.length ? resolve(result) : reject(new Error('BookDetails not found'));
  });
};

export default stubBookDetails;
