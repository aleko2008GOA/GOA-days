import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav style = {{
            display: 'flex', 
            justifyContent: 'space-between', 
            backgroundColor: 'black'
        }}>
            <Link style = {{color: 'white', fontSize: '20px'}} to={`/`}>Home</Link>
            <Link style = {{color: 'white', fontSize: '20px'}} to={`/about`}>About</Link>
            <Link style = {{color: 'white', fontSize: '20px'}} to={`/form`}>Form</Link>
        </nav>
    )
}

export default Navbar;