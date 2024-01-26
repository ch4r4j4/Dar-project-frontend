import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import './App.css'
import image from './assets/react.svg'

export function Login(){
    return(
    <div className='firstSection'>
    <div>
      <img src={image} alt="logo" />
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
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