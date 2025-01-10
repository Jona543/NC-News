import { UserContext } from "../Contexts/User";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, loggedInUser } = useContext(UserContext);

  return (
  <div className="header">
    <div classname="titleAlignment">
      <Link to={"/"}>
        <header className="title">Northcoders News</header>
      </Link>
      <Link to={"users"}>
      <button className="profile">Log In
      </button>
      </Link>
    </div>
      <h3 className="leftAlignment">You are currently signed in as: {isLoggedIn ? loggedInUser.username : "guest"}</h3>
  </div>
  );
};

export default Header;
