import { useState, useEffect } from "react";

import SearchFilter from "./Components/SearchFilter";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const userData = data.map((element) => (
    <li key={element.id} style={{ listStyle: "none" }}>
      <h3>
        {element.first_name} {element.last_name}
      </h3>
    </li>
  ));

  return (
    <div>
      <SearchFilter data={data} />
      <ul>{userData}</ul>
    </div>
  );
}

export default App;
