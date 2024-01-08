const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers.map((number) => (
    <li key={number}>
      <a style={{ margin: "2px" }} href="!#" onClick={() => paginate(number)}>
        {number}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul style={{ listStyle: "none", display: "flex" }}>{pages}</ul>
    </nav>
  );
};

export default Pagination;
