import './App.css';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Titulo from './components/Titulo/Titulo';
import Formulario from './components/Formulario/Formulario';
import Cita from './components/Cita/Cita';
function App() {
const citas=[
{
  Mascota:"Nina",
  Dueño:"Martin",
  Fecha:"2021-08-05",
  Hora: "08:20",
  Sintomas:"Le duele la pierna",
},
{
  Mascota:"Sifon",
  Dueño:"Flecha",
  Fecha:"2023-08-05",
  Hora: "09:24",
  Sintomas:"Duerme mucho",
},
{
  Mascota:"Floki",
  Dueño:"Ari",
  Fecha:"2023-08-05",
  Hora: "16:15",
  Sintomas:"No está comiendo",
}
]

  return (
    <>
    <Titulo />
    <div className='container'>
        <div className='column'>
          <Subtitulo texto={'CREAR MI CITA'}></Subtitulo>
          <Formulario></Formulario>
        </div>
        <div className='column'>
          <Subtitulo texto={'ADMINISTRA TUS CITAS'}></Subtitulo>
          {
            citas.map(t => <Cita mascota={t.Mascota} dueño={t.Dueño} fecha={t.Fecha} hora={t.Hora} sintomas={t.Sintomas}/>)
          }        
      </div>
    </div>
    </>
  );
}
export default App;
