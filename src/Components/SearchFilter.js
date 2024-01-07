import { useEffect, useState } from "react";

const SearchFilter = ({ data, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const inputChangeHandler = (searchValue) => {
    setSearchTerm(searchValue);
    // setSearchTerm((prevState) => (prevState = event.target.value));
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const filteredData = data.filter((element) =>
        element.last_name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

      if (filteredData.length === 0) {
        onFilter(["invalid"]);
      } else onFilter(filteredData);
    } else {
      onFilter(data);
    }
  }, [data, onFilter, searchTerm]);

  return (
    <div>
      <label htmlFor="last_name">Search by last name: </label>
      <input
        type="text"
        id="last_name"
        value={searchTerm}
        onChange={(event) => inputChangeHandler(event.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
