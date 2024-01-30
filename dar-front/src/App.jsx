
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import './App.css'
import image from './assets/react.svg'
import {Testimonio} from './components/testimonio';
import StepForm from './components/Stepform';



/*ningun cambio por hoy di creo que ya fuimos no entiendo muchas cosas de react*/
function App() {
  /*const { register, handleSubmit, errors } = useForm();*/

  /*const onSubmit = (data) => {
    console.log(data);
  };*/

  return (///solo se puede devolver un componente si quieres mas componentes tenemos que unificarlos en ta solo un elemento
    <div>
    <Testimonio
      nombre = 'Paul benjamin Charaja Torres'
      lugar = 'Peru'
      año ='1999'
      testimonio = 'mi desrrollo a ido avanzando mucho pero las ultimas fechas a sido muy dificil tener ese eanimo de continuar pero el detalle estan en darme mucho mas animo en este aspecto'
    />
    <Testimonio
      nombre = 'Paul benjamin Charaja Torres'
      lugar = 'Peru'
      año ='1999'
      testimonio = 'mi desrrollo a ido avanzando mucho pero las ultimas fechas a sido muy dificil tener ese eanimo de continuar pero el detalle estan en darme mucho mas animo en este aspecto'
    />
    <StepForm/> 
  </div>
    )
}

export default App

/* estamos terribles estos ultimos deias no hemos avanzado nada con respecto a esto tenemos que mejorar y avnazar un poco con respecto a este tema */