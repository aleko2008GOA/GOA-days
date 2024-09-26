import { Link } from "react-router-dom";

function Home(){
    return (
        <>
            <h1>Welcome!</h1>
            <p>We are a company that will help you with your future job, first, <Link to={'/sign'} >log in</Link></p>
        </>
    )
}

export { Home };