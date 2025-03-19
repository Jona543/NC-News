import { useContext } from "react";
import { UserContext } from "../Contexts/User";

const SelectedUser = ({ user }) => {
  const { setLoggedInUser } = useContext(UserContext);

  console.log(user)
  const handleClick = () => {
    setLoggedInUser(user);
  };

  return (
    <div className="userProfile">
      <div onClick={handleClick} className="user-select">
      <img src={user.avatar_url}/>
      <p className="userID">
        User ID: {user.username}
      </p>
      </div>
      <p className="userFullName">Name: {user.name}</p>
    </div>
  );
};

export default SelectedUser;
