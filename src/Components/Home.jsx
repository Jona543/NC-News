import { Link } from "react-router-dom";
import UserList from "./UserList";
import TopicsList from "./TopicsList";

const Home = () => {
  return (
    <>
      <h2>Log in here:</h2>
      <UserList/>
      <Link to={"/articles"}>
        <h2> View All Articles</h2>
      </Link>
      <TopicsList/>
    </>
  );
};

export default Home;
