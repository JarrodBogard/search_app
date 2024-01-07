import { useState, useEffect, useCallback, useRef } from "react";

import SearchFilter from "./Components/SearchFilter";
import User from "./Components/User";

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

  const filteredDataHandler = useCallback((filtered) => {
    setFilteredData(filtered);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <SearchFilter
        data={data}
        onFilter={filteredDataHandler}
        setFilteredData={setFilteredData}
      />
      <User data={data} filteredData={filteredData} />
    </div>
  );
}

export default App;
