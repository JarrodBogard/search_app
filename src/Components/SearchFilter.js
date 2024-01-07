import { useState } from "react";

const SearchFilter = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log(props.data);

  const inputChangeHandler = (event) => {
    setSearchTerm(event.target.value);
    // setSearchTerm((prevState) => (prevState = event.target.value));
  };

  // console.log(props.data[0].last_name.split(" "));
  const filteredData = props.data.filter((element) =>
    element.last_name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  console.log(filteredData, "filtered data", searchTerm);

  return (
    <div>
      <label htmlFor="last_name">Search Lastname: </label>
      <input
        type="text"
        id="last_name"
        value={searchTerm}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default SearchFilter;
