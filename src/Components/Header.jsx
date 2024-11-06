import { UserContext } from "../Contexts/User"
import { useContext, UseContext } from "react"

const Header = () => {

    const { isLoggedIn, loggedInUser } = useContext(UserContext)

    return (<>
        <h1 className="header">
            Northcoders News
        </h1>
        <h2>Logged in as {isLoggedIn ? loggedInUser.username : "guest"}</h2>
        </>
    )
}

export default Header