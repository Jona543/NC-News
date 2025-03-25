import { UserContext } from "../Contexts/User";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, loggedInUser } = useContext(UserContext);

  if (!isLoggedIn) {
    return (
      <div className="header">
        <div classname="titleAlignment">
          <Link to={"/"}>
            <header className="title">Northcoders News</header>
          </Link>
        </div>
        <div className="loginAlignment">
          <Link to={"users"}>
          <button className="profile">Log In
          </button>
          </Link>
          <h3>You are currently signed in as: guest</h3>
          <p>
          Please log in to interact with articles
          </p>
        </div>
      </div>
      );
  }
  return (
  <div className="header">
    <div classname="titleAlignment">
      <Link to={"/"}>
        <header className="title">Northcoders News</header>
      </Link>
    </div>
    <div className="loginAlignment">
      <Link to={"users"}>
      <button className="profile">Switch User
      </button>
      </Link>
      <h3>You are currently signed in as: {isLoggedIn ? loggedInUser.username : "guest"}</h3>
    </div>
  </div>
  );
};

export default Header;
