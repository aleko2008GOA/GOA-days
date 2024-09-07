import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [users, setUsers] = useState(localStorage.accaunt ? [...JSON.parse(localStorage.accaunt)] : []);

  function handleSubmit(e){
    e.preventDefault();
    if(!users.find(val => val.email == e.target.email.value)){
      setUsers(prev => [...prev, {
        name: e.target.name.value, 
        email: e.target.email.value, 
        location: e.target.location.value, 
        birthday: e.target.birthday.value
      }]);
    }else{
      alert('Sorry, this accaunt already exist');
    }
  }

  useEffect(() =>{
    localStorage.accaunt = JSON.stringify(users);
  }, [users]);

  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 border-2 p-8 rounded-lg'>
          <h1 className='text-2xl font-bold'>Add youself!</h1>
          <span className='flex justify-between gap-2'>
            <label htmlFor = 'name'>Name</label><input className = 'border-2 rounded-lg' type = 'text' name = 'name' id = 'name' /><br />
          </span>
          <span className='flex justify-between gap-2'>
            <label htmlFor = 'email'>Email</label><input className = 'border-2 rounded-lg' type = 'email' name = 'email' id = 'email' /><br />
          </span>
          <span className='flex justify-between gap-2'>
          <label htmlFor = 'location'>Location</label><input className = 'border-2 rounded-lg' type = 'text' name = 'location' id = 'location' /><br />
          </span>
          <span className='flex justify-between gap-2'>
            <label htmlFor = 'birthday'>Birthday</label><input className = 'border-2 rounded-lg' type = 'date' name = 'birthday' id = 'birthday' /><br />
          </span>
          <span className='flex justify-between gap-2'>
            <input className = 'border-2 rounded-lg px-4' type = 'submit' /><input className = 'border-2 rounded-lg px-4' type = 'reset' />
          </span>
        </form>
      </div>
      <div>
        {users.length == 0 ? <p>No users yet :(</p> : (
          <table className='border-collapse border border-gray-400'>
            <thead>
              <tr>
                {users.length == 0 ? 'No users yet :(' : users.map((val, index) => (
                  <th className='border px-4 py-2' key = {index}>{val.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {users.length == 0 ? 'No users yet :(' : users.map((val, index) => (
                  <td className='border px-4 py-2' key = {index}>{val.email}</td>
                ))}
              </tr>
              <tr>
                {users.length == 0 ? 'No users yet :(' : users.map((val, index) => (
                  <td className='border px-4 py-2' key = {index}>{val.location}</td>
                ))}
              </tr>
              <tr>
                {users.length == 0 ? 'No users yet :(' : users.map((val, index) => (
                  <td className='border px-4 py-2' key = {index}>{val.birthday}</td>
                ))}
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}

