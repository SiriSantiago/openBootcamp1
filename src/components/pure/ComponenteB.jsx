import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

const ContactoComponent = ({contacto}) => {
    
  return (
    <div>
         <h1>Nombre: {contacto.nombre}</h1>
         <h2>Apellido: {contacto.apellido}</h2>
         <h3>Email: {contacto.email}</h3>
         <h4>{contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h4>
    </div>
  )
}

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ContactoComponent
