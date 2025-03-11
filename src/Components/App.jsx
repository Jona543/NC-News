import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Articles from "./Articles";
import Article from "./Article";
import { useState } from "react";
import { UserContext } from "../Contexts/User";
import TopicsList from "./TopicsList";
import UserList from "./UserList";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const isLoggedIn = Object.keys(loggedInUser).length > 0;
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
      <>
        <Header />
        <section>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:article_id" element={<Article />} />
          <Route path="/articles/:topic" element={<Articles />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
        </section>
      </>
    </UserContext.Provider>
  );
}

export default App;
