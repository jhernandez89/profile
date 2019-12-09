import React, { useEffect, useState } from "react";
import mockData from "../mockData";
import InfoPanel from "./InfoPanel";

const AssignRoles = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(mockData);
  }, []);

  if (users.length === 0) return <div>loading</div>;
  // <SearchBar />
  // <Portal users={data} />;
  return (
    <div>
      <InfoPanel user={users[0]} />
    </div>
  );
};

export default AssignRoles;
