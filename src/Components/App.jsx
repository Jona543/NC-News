import { Routes, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Articles from "./Articles"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  )
}

export default App
