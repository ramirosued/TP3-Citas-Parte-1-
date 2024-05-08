import './Cita.css';
function Citas({mascota,dueño,fecha,hora,sintomas, citas, setCitas}){
    const eliminarCita=(e)=>{
      const num = citas.findIndex(cita => cita === e)
      setCitas([
        citas.pop(num)])
    }
return(
    <div className='tarjeta'>
        <ul>
        <li><b>Nombre:</b> {mascota}</li>
        <li><b>Dueño:</b> {dueño}</li>
        <li><b>Fecha:</b> {fecha}</li>
        <li><b>Hora:</b> {hora}</li>
        <li><b>Sintomas:</b> {sintomas}</li>
    </ul>
    <button onClick={eliminarCita} type="submit">ELIMINAR x</button>
    </div>
    
)
}
export default Citas;