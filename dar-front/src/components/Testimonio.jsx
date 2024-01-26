import React from "react";
import image from '../assets/react.svg'
import './Testimonio.css'

export function Testimonio(props){
    return(
        <div className="Tarjeta">
            <img className="logoreact" src={image} alt="foto" />
            <div className="Info">
                <h1 className="Nombre">{props.nombre}</h1>
                <h2 className="where">Nacio en {props.lugar} en el año {props.año}</h2>
                <p>{props.testimonio}</p>
            </div>
        </div>
    );
}

/*tengo que practicar un poco mas de css*/
