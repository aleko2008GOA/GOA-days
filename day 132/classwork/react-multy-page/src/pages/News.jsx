import React, { useContext } from "react";
import { DataContext } from "./Form";
import { Link } from "react-router-dom";

function News(){
    const {account} = useContext(DataContext);

    if(account.name == ''){
        return <><Link to={'/sign'}>Sign in</Link> first</>
    }

    return (
        <>
            <h1>Welcome {account.name}!</h1>
            <p>We send a massage to your email {account.email}, pleace answer it.</p>
        </>
    );
}

export default News;