import { useEffect, useState } from "react";
import { StudentContext } from "../context/Context";
import StudentList from "./StudentList";
import StudentItem from "./StudentItem";

function StudentForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState(localStorage.users ? JSON.parse(localStorage.users) : []);
    
    useEffect(() =>{
        localStorage.users = JSON.stringify(users);
    }, [users])

    const inputs = [
        {
            name: 'Name',
            type: 'text',
            placeholder: 'Firstname Lastname',
        },
        {
            name: 'Email',
            type: 'email',
            placeholder: 'example@gmail.com',
        },
        {
            name: 'Password',
            type: 'password',
            placeholder: '',
        },
    ];

    function handleSubmit(e){
        e.preventDefault();
        setUsers(prev =>{
            return [...prev, {
                name: e.target.elements.Name.value,
                email: e.target.elements.Email.value,
                password: e.target.elements.Password.value
            }];
        });
    }

    function handleChange(e){
        if(e.target.name === 'Name'){
            setName(e.target.value);
        }
        else if(e.target.name === 'Email'){
            setEmail(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }

    return (
        <>
            <form className = 'border-1' onSubmit = {handleSubmit}>
                {inputs.map((val, index) =>(
                    <span key = {index}>
                        <label htmlFor = {val.name}>{val.name}</label>
                        <input 
                            onChange = {handleChange} 
                            type = {val.type} 
                            name = {val.name} 
                            id = {val.name} 
                            placeholder = {val.placeholder} 
                            value = {val.name == 'Name' ? name : val.name == 'Email' ? email : password} 
                            required
                        />
                    </span>
                ))}
                <span>
                    <input type = "submit" /><input type = "reset" />
                </span>
            </form>
            <StudentContext.Provider value = {users}>
                <StudentList />
            </StudentContext.Provider>
            <StudentContext.Provider value = {users}>
                <StudentItem />
            </StudentContext.Provider>
        </>
    );
}

export default StudentForm;