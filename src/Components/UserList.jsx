import { useEffect, useState } from "react";
import { getUsers } from "../api";
import SelectedUser from "./SelectedUser";
import { Link } from "react-router-dom";

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
    <>
      <h2 className="leftAlignment">
        For test purposes, please sign in using one of these profiles
      </h2>
      <ul className="userTopicList">
        {users.map((user) => {
          return <SelectedUser user={user} key={user.username} />;
        })}
      </ul>
      <Link to={"/"}>
      <h2 className="returnToArticles">Return to articles</h2>
      </Link>
    </>
  );
};

export default UserList;
