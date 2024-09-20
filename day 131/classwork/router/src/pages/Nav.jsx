import { Link } from 'react-router-dom'

function Nav(){
    return (
        <nav style = {{display: 'flex', flexDirection: 'column', padding: '20px'}}>
            <Link to = {'/'} >Home</Link>
            <Link to = {'/form'} >Form</Link>
            <Link to = {'/info'} >Info</Link>
            <Link to = {'/git'} >Git</Link>
            <Link to = {'/photos'} >Photos</Link>
        </nav>
    );
}

export default Nav;