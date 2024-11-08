import { useEffect, useState } from "react";
import { getUsers } from "../api";
import SelectedUser from "./SelectedUser";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading Users</p>;
  }

  return (
    <ul><h2>Sign in here</h2>
      {users.map((user) => {
        return <SelectedUser user={user} key={user.username} />;
      })}
    </ul>
  );
};

export default UserList;
