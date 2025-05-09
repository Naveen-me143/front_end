import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        // Limit to first 6 users
        setUsers(res.data.users.slice(0, 6));
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">User List</h4>
        </div>
        <ul className="list-group list-group-flush">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {user.firstName} {user.lastName}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FetchUsers;
