import { Form } from "./components/Form"
import { Navbar } from "./components/Navbar"
import { Tables } from "./components/Tables"
function App() {
 
  return (
    <>
     <div className="container">
      <div className="row mb-3">
        {/* aqui va la llamada al componente de la navar */}
        <Navbar></Navbar>

      </div>
      <div className="row">
        <div className="col-lg-5">
          {/* Aqui va la llamda al componente para el formulario */}
          <Form/>

        </div>
       <div className="col-lg-7">
        {/* Aqui va la llamda al componente para la tabla */}
         <Tables/>
       </div>
      </div>
      
     </div>
    </>
  )
}

export default App