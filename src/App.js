import { useState, useEffect, useCallback, useRef } from "react";

import SearchFilter from "./Components/SearchFilter";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const hasLoadedBefore = useRef(true);

  useEffect(() => {
    if (hasLoadedBefore.current) {
      hasLoadedBefore.current = false;
    } else {
      const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(
          `https://random-data-api.com/api/v2/users?size=100`
        );

        const fetchedData = await response.json();

        setData(fetchedData);

        setIsLoading(false);
      };
      fetchData();
    }
  }, []);

  console.log(data);

  const filteredDataHandler = useCallback((filtered) => {
    setFilteredData(filtered); // setData(data) this will erase initial data set
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  let userData;

  if (filteredData[0] === "invalid") {
    userData = <p>No users exist for current search parameters.</p>;
  } else if (filteredData.length === 0) {
    userData = data.map((element) => (
      <li key={element.id + Math.random()} style={{ listStyle: "none" }}>
        <h3>
          {element.first_name} {element.last_name}
        </h3>
      </li>
    ));
  } else {
    userData = filteredData.map((element) => (
      <li key={element.id + Math.random()} style={{ listStyle: "none" }}>
        <h3>
          {element.first_name} {element.last_name}
        </h3>
      </li>
    ));
  }

  // const userData = filteredData.map((element) => (
  //   <li key={element.id + Math.random()} style={{ listStyle: "none" }}>
  //     <h3>
  //       {element.first_name} {element.last_name}
  //     </h3>
  //   </li>
  // ));

  return (
    <div>
      <SearchFilter
        data={data}
        onFilter={filteredDataHandler}
        setFilteredData={setFilteredData}
      />
      <ul>{userData}</ul>
    </div>
  );
}

export default App;
