import React, { useState } from 'react';
import './App.css'
/*const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (e) => {
     e.preventDefault();
     console.log('Email:', email);
     console.log('Password:', password);
  };
};*/


function App() {
  return (
    /*<form onSubmit={handleSubmit}>
       <label>
         Email:
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
       </label>
       <br />
       <label>
         Password:
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       </label>
       <br />
       <button type="submit">Login</button>
    </form>*/
    <form>
      <label htmlFor="">nombre
      <input type="text" name="user" id="user" placeholder='mi nombre es' /></label>

    </form>
    )
}

export default App
