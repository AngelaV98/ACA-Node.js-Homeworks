export default function managePagination(currentPage, pageNumber) {
  let pages = [];
  if (pageNumber < 6) {
    for (let i = 1; i <= pageNumber; i++) {
      pages.push(i);
    }
  } else if (currentPage > 3) {
    if (currentPage < pageNumber - 2) {
      pages.push(
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2
      );
    } else {
      for (let i = pageNumber - 4; i < pageNumber + 1; i++) {
        pages.push(i);
      }
    }
  } else {
    for (let i = 1; i < 6; i++) {
      pages.push(i);
    }
  }
  return pages;
}