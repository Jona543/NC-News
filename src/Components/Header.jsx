import { UserContext } from "../Contexts/User";
import { useContext, UseContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, loggedInUser } = useContext(UserContext);

  return (
    <div className="headerAlignment">
      <Link to={"/"}>
        <h1 className="header">Northcoders News</h1>
      </Link>
      <h2>Signed in as: {isLoggedIn ? loggedInUser.username : "guest"}</h2>
    </div>
  );
};

export default Header;
