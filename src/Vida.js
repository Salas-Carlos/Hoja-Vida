import React from 'react';
import foto from './img/foto.jpg'
import facebook from './img/facebook.png'
import twitter from './img/gorjeo.png'
import instagram from './img/instagram.png'
import google from './img/google-mas.png'
import './Vida.css';


class Vida extends React.Component {

  render() {
    return (
      <div class="contenedor" >

      <div class="fondo1">
              <img  src={foto} class="foto" />
            
      </div>
      <div class="caja">
      <h1 >Carlos Andres Salas Reyes</h1>

        
      </div>
     
      <div class="caja1">
        <ul>
        
          <li>Perfil</li>
          <li>Habilidades</li>
          <li>Proyectos</li>
         
        </ul>
      </div>
      <div class="linea"> </div>
      
      <div class="caja2Texto">
        <p>Estudiante de ingenieria de sistemas de la Universidad Tecnologica de Bolivar.</p>
        <br/>
        
        <p>Direccion: Arjona-Bolivar</p>
        <p>Edad: 20 Años</p>
        <br/>
        <h1>Hobbies:</h1>
        <div class="caja3">

        </div>
        <div class="netflix">

        </div>
      </div>

      <div class="fondob">
        <ul>
        
            <li><img src={facebook} class="redS"/></li>
            <li><img src={twitter} class="redS"/></li>
            <li><img src={instagram} class="redS"/></li>
            <li><img src={google} class="redS"/></li>
                    
        </ul>
      </div>
 
  </div>
    );
  }
}

export default Vida;
