const User = ({ data, filteredData }) => {
  let userData;

  if (filteredData[0] === "invalid") {
    userData = <p>No users exist for current search parameters.</p>;
  } else if (filteredData.length === 0) {
    userData = data.map((element) => (
      <li key={element.id + Math.random()} style={{ listStyle: "none" }}>
        <img src={element.avatar} alt="user" />
        <h3>
          {element.first_name} {element.last_name}
        </h3>
      </li>
    ));
  } else {
    userData = filteredData.map((element) => (
      <li
        key={element.id + Math.random()}
        style={{ listStyle: "none", display: "inline-block" }}
      >
        <img src={element.avatar} alt="user" style={{ width: "100px" }} />
        <h3>
          {element.first_name} {element.last_name}
        </h3>
      </li>
    ));
  }

  return <ul>{userData}</ul>;
};

export default User;
