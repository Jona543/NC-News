import { useContext } from "react";
import { UserContext } from "../Contexts/User";

const SelectedUser = ({ user }) => {
  const { setLoggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setLoggedInUser(user);
  };

  return (
    <div>
      <button onClick={handleClick}>Log In as {user.username}</button>
    </div>
  );
};

export default SelectedUser;
