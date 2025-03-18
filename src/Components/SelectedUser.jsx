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
      <img src={user.avatar_url}/>
      <p onClick={handleClick} className="userID">
        User ID: {user.username}
      </p>
      <p className="userFullName">Name: {user.name}</p>
    </div>
  );
};

export default SelectedUser;
