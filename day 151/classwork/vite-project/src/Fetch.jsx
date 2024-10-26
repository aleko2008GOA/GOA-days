import { useState } from "react";
import Add from "./Add";

function GetUsers(){
    const [data, setData] = useState([]);

    function fetchData(){
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(users => setData(users.users))
            .catch(err => console.error('Error: ' + err))
            .finally(console.log('fetched!'))
    }

    function removeUser(key){
        const arr = data.slice();
        arr.splice(key, 1);
        setData(arr);
    }

    function handleSubmit(formData){
        fetch('https://dummyjson.com/users', {
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: formData.name,
                    age: formData.age,
                    email: formData.email,
                    phone: formData.phone
                })
            })
            .then(res => res.json())
            .then(user => {
                setData(prev => [...prev, user]);
            })
            .catch(err => console.error('Error: ' + err))
            .finally(console.log('fetched!'));

        setData(prev => [...prev, {
            firstName: formData.name,
            age: formData.age,
            email: formData.email,
            phone: formData.phone
        }]);
    }

    return (
        <>
            <h1>Hello!</h1>
            <button onClick={() => fetchData()}>Get Users</button>
            <table>
                <thead>
                    <tr style = {{backgroundColor: 'blue', color: 'white'}}>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) =>(
                        <tr key = {index}>
                            <td>{user.firstName}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td onClick={() => removeUser(index)}>Remove</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Add formData = {handleSubmit}/>
        </>
    )
}

export default GetUsers;