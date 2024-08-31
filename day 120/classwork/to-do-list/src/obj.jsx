import React, { useState } from "react";

function CreateObjs(){
    const [users, setUsers] = useState([]);
    const [friend, setFriend] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        let user = {
            name: e.target.name.value,
            username: e.target.userName.value,
            email: e.target.email.value
        }
        setUsers([...users, user]);
    }

    function handleAddingFriends(newFriend){
        setFriend([...friend, newFriend]);
    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
                <label>Name:</label>
                <input type = 'text' name = 'name' placeholder="Nika" /><br />
                <label>Username:</label>
                <input type = 'text' name = 'userName' placeholder="guest" /><br />
                <label>Email:</label>
                <input type = 'email' name = 'email' placeholder="example@gmail.com" /><br />
                <input type = 'submit' />
            </form>
            <ul>
                {
                    users.map((val, index) =>{
                        return (
                            <li key = {index}>
                                Hello {val.username}, your name is {val.name} and email is {val.email} 
                                <button onClick = {() => handleAddingFriends(val)}>Add Friend</button>
                            </li>
                        )
                    })
                }
            </ul>
            <ol>
                {
                    friend.map((val, index) =>{
                        return (
                            <li key = {index}>
                                Hello {val.username}, your name is {val.name}, your email is {val.email} and you are my friend now!
                            </li>
                        )
                    })
                }
            </ol>
        </>
    )
}

export default CreateObjs;