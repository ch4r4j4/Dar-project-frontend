
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import './App.css'
import image from './assets/react.svg'



/*ningun cambio por hoy di creo que ya fuimos no entiendo muchas cosas de react*/
function App() {
  /*const { register, handleSubmit, errors } = useForm();*/

  /*const onSubmit = (data) => {
    console.log(data);
  };*/

  return (
   <div className='firstSection'>
    <div>
      <img src={image} alt="logo" />
    </div>
    <form /*onSubmit={handleSubmit(onSubmit)}*/>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
    )
}

export default App
/*por el momento nos falta configurar correctamente lo del hook-form*/
