import { useNavigate, Link } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    
    return <>
    <Link to={"/articles"}><h2> View Articles</h2></Link>
    </>
}

export default Home