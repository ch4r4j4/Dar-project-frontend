
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import './App.css'
import image from './assets/react.svg'



/*ningun cambio por hoy di creo que ya fuimos no entiendo muchas cosas de react*/
function App() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className='firstSection'>
    <div>
      <img src={image} alt="logo" />
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          ref={register({ required: 'Email is required' })}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          ref={register({ required: 'Password is required' })}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </section>
    )
}

export default App
