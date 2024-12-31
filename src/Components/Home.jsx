import { Link } from "react-router-dom";
import UserList from "./UserList";
import TopicsList from "./TopicsList";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <UserList />
      <Link to={"/articles"} className="headerAlignment">
        <h2> View All Articles</h2>
      </Link>
      <TopicsList />
    </div>
  );
};

export default Home;
