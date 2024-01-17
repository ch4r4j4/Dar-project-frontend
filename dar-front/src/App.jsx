
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import './App.css'


/*ningun cambio por hoy di creo que ya fuimos no entiendo muchas cosas de react*/
function App() {

  const{}=useForm();
  return (
    <form>
        {/* nombre*/}
        <label htmlFor='nombre'>
        Nombre
        </label>
        <input type="text"/>
        {/* correo*/}
        <label htmlFor="correo">
          email
        </label>
        <input type="email"/>
        {/* constraseña*/}
        <label htmlFor="password">
          password
        </label>
        <input type="password" name="" id="" />
    </form>
    )
}

/**hoy no vanzamos nada por no decir nada siepre pero es momento de realizar muchas actividades
 * segundo dia sin avanzar con respecto al proyecto del DAR pero tengo que darle con mas ganas en la parte donde tengo maas tiempo como por ejemplo en los sabados domingos

tercer dia en el que tuve que avanzar mañana si o si tengo que empezar a trabajar esto*/

export default App
