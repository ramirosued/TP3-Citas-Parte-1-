import { useState } from 'react';
import './Formulario.css';



function Formulario({setCitas, citas}) {

    const crearCita = (e) => {
        e.preventDefault();
        setCitas([
            ...citas,
            {
                nombre: e.target.nombre.value,
                nombreDueño: e.target.nombreDueño.value,
                fecha: e.target.fecha.value,
                hora: e.target.hora.value,
                sintomas: e.target.sintomas.value
            }
        ])
    }

    return (
        <form onSubmit={crearCita}>
            <label>Nombre mascota</label>
            <input type="text" name="nombre" placeholder="Nombre mascota"></input>
            <label>Nombre dueño</label>
            <input type="text" name="nombreDueño" placeholder="Nombre dueño de la mascota"></input>
            <label>Fecha</label>
            <input type="date" name="fecha"></input>
            <label>Hora</label>
            <input type="time" name="hora"></input>
            <label>Sintomas</label>
            <textarea name="sintomas"></textarea>
            <button type="submit">AGREGAR CITA</button>
        </form>
        
    )

}


export default Formulario;