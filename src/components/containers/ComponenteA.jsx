import React from 'react';
import { Contacto } from '../../models/contacto.class';
import {ESTADO} from '../../models/estado'
import ContactoComponent from '../pure/ComponenteB';


const ComponenteA = (contacto) => {
  
    const  defaultContacto = new Contacto("Santiago","Siri","santiagosiri2001@gmail.com",ESTADO.conectado )
  
    return (
    <div>
         <h1>CONTACTS:</h1>
         <ContactoComponent contacto={defaultContacto}></ContactoComponent>
    </div>
  )
}


export default ComponenteA
