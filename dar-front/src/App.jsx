import React, { useState } from 'react';
import './App.css'



function App() {
  return (
    <form>
      {/* nombre*/}
      <label htmlFor='nombre'>
        Nombre
        </label>
        <input type="text"/>
        <label htmlFor="contraseña">contraseña</label>
        <input type="email"/>
    </form>
    )
}

export default App
