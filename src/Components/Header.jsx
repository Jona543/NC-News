import { UserContext } from "../Contexts/User";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, loggedInUser } = useContext(UserContext);

  return (
  <>
      <Link to={"/"}>
        <header className="header">Northcoders News</header>
      </Link>
      <h3 className="leftAlignment">You are currently signed in as: {isLoggedIn ? loggedInUser.username : "guest"}</h3>
      </>
  );
};

export default Header;
