import './Formulario.css';

function Formulario(){
    return(
        <form>
            <label>Nombre mascota</label>
            <input type="text" placeholder="Nombre mascota"></input>
            <label>Nombre dueño</label>
            <input type="text" placeholder="Nombre dueño de la mascota"></input>
            <label>Fecha</label>
            <input type="date"></input>
            <label>Hora</label>
            <input type="time"></input>
            <label>Sintomas</label>
            <textarea></textarea>
            <button type="submit">AGREGAR CITA</button>
        </form>
    )
}

export default Formulario;