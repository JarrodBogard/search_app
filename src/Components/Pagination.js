const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers.map((number) => (
    <li key={number}>
      <a href="!#" onClick={() => paginate(number)}>
        {number}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul>{pages}</ul>
    </nav>
  );
};

export default Pagination;
