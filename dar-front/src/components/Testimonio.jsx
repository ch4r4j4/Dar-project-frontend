import React from "react";
import image from '../assets/react.svg'
import './Testimonio.css'

export function Testimonio(){
    return(
        <div className="Tarjeta">
            <img src={image} alt="foto" />
            <div className="Info">
                <h1 className="Nombre">Paul</h1>
                <h2 className="where">Nacido en 98 de Puno</h2>
                <p>soy un desarrollador front end developer que Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur voluptatibus fuga nisi praesentium, recusandae dolor molestiae ipsa temporibus numquam! Incidunt neque at necessitatibus obcaecati, aut a cumque sed! Fugiat!</p>
            </div>
        </div>
    );
}


/*tengo que practicar un poco mas de css*/
