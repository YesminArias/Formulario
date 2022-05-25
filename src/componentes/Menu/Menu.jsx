import React, {useState} from "react";
import "./menu.css";
import  { AiOutlineMenu } from  "react-icons/ai";




export default function Menu() {
  const [aerolineas, setAerolineas] = useState( [{id:"1", name: "Vivair"}, {id: "2", name: "Avianca"}, {id: "3", name: "Latam"}, {id: "4", name: "Aerolineas"}] );
 const [isOpen, setIsOpen] = useState(false);
 const [aerolinea, setAerolinea]= useState('');


 function handleOpen(e) {
     setAerolinea(e);
     setIsOpen(false);

 }

  return (
      <div>
    <div className="container">
        <div className='nabvar'>
     <h2 className='logo'>Aerolineas </h2>
     
     </div>
    <ul className={`menu ${isOpen && "open"}`}> 
        {aerolineas && aerolineas.map((e)=> {
           
            return(
               <a  key={e.id} id={e.id} 
                onClick={()=> handleOpen(e.name)}  
               > <li className='menu_items'>{e.name}</li></a>
            )
        } )}
    </ul>
    <div>
    <AiOutlineMenu className={`icons ${isOpen && "open"}`} 
     onClick={()=> setIsOpen(!isOpen)} />
    </div>

  
    </div>
    {aerolinea && aerolinea.length > 0 ? <p className='bienvenida'>
    Hola, bienvenido, sabemos que quieres viajar en un <strong>{aerolinea}</strong>, por favor diligencia el siguiente formulario:
    
          </p> : <p className='bienvenida'>
            Bienvenido
          </p>}
         
    </div>
  );
}
