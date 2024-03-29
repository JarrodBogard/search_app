const User = ({ filteredData, currentItems }) => {
  let userData;

  if (filteredData[0] === "invalid") {
    userData = <p>No users exist for current search parameters.</p>;
  } else {
    userData = currentItems.map((element) => (
      <li key={element.id + Math.random()} style={{ listStyle: "none" }}>
        <img src={element.avatar} alt="user" style={{ width: "50px" }} />
        <h3>
          {element.first_name} {element.last_name}
        </h3>
      </li>
    ));
  }

  return <ul>{userData}</ul>;
};

export default User;
