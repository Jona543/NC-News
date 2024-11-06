import { Link } from "react-router-dom";
import UserList from "./UserList";
import { UserContext } from "../Contexts/User";
import { useContext } from "react";

const Home = () => {
  const { isLoggedIn, loggedInUser } = useContext(UserContext)
  return (
    <>
      <h2>Log in here:</h2>
      <UserList/>
      <Link to={"/articles"}>
        <h2> View Articles</h2>
      </Link>
    </>
  );
};

export default Home;
