import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

function FormProvider({ children }) {
    const [account, setAccount] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setAccount({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        });
        navigate('/news');
    };

    return (
        <DataContext.Provider value={{ account, handleSubmit }}>
            {children}
        </DataContext.Provider>
    );
}

export { FormProvider, DataContext };

export function Form() {
    const { handleSubmit } = useContext(DataContext);

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label><input type='text' name='name' /><br />
            <label>Email: </label><input type='email' name='email' /><br />
            <label>Password: </label><input type='password' name='password' /><br />
            <input type='submit' />
        </form>
    );
}