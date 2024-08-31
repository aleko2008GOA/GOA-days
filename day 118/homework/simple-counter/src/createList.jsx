import React, { useState } from "react";

function CreateList(){
    const [list, setList] = useState([]);
    const [users, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const [disable, setAble] = useState(false);
    const [list_input, setInput] = useState(0);

    function addList(e){
        e.preventDefault();
        setList([...list, e.target.list.value]);
        setUser([...users, {name: e.target.name.value, email: e.target.email.value}]);
        setInput(e.target.list.value.length)
    }

    function handleChange(e){
        setShow(e.target.checked)
    }

    return (
        <>
            <form onSubmit = {addList}>
                <input placeholder = 'list content' name = 'list' required/><br/>
                <input type = 'text' name = 'name' placeholder = 'name' required/><br/> 
                <input type = 'email' name = 'email' placeholder = 'example@gmail.com' required/><br/> 
                <input type = {show ? 'text' : 'password'} name = 'password' /><input onChange = {handleChange} name = "showPass" type = 'checkbox'/><br/>
                <input type = 'submit' value = 'I will add form values'/>
            </form>
            <ul>{list.map((val, index) => <li key = {index}>{val}</li>)}</ul>
            <div>{users.map((user, index) => <p key = {index}>Hello {user.name}, your email is {user.email}</p>)}</div>
            <p>{list_input}</p>
            <button onClick = {() => disable ? setAble(false) : setAble(true)}>{disable ? 'Able' : 'Disable'} it</button><button disabled = {disable}>I am {disable ? 'disabled' : 'abled'}</button>
        </>
    )
}

export default CreateList;