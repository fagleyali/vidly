const paginate = (items, currentPage, pageNumber) => {
  if (!items) return null;
  const startIndex = (currentPage - 1) * pageNumber;
  return items.slice(startIndex, pageNumber * currentPage);
};

export default paginate;
