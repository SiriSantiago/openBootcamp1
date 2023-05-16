import { ESTADO } from './estado';

export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    conectado = ESTADO.conectado;

    constructor(nombre,apellido,email,conectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
}