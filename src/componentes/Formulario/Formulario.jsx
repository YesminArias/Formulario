import React, { useState } from "react";
import "./formulario.css";
import Swal from 'sweetalert2';

export default function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
 

  const errorMessage = validate(name, email, mobile, age);

  function handleSubmit() {
    
    console.log(
      "Nombre:" +
        name +
        " Correo:" +
        email +
        " Celular:" +
        mobile +
        " Edad:" +
        age
    );
    setName("");
    setEmail("");
    setMobile("");
    setAge("");
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu información fue enviada con éxito, estaremos en contacto contigo',
      showConfirmButton: false,
      timer: 5000
    })
  }
  
  return (
    <div className="base">
      <form className="form">
        <input
          className="form-control"
          name="name"
          type="text"
          value={name}
          placeholder="Nombre Completo"
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          className="form-control"
          name="email"
          type="email"
          value={email}
          placeholder="Correo electronico"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          className="form-control"
          name="mobile"
          type="number"
          value={mobile}
          placeholder="Celular"
          onChange={(e) => setMobile(e.target.value)}
        ></input>

        <input
          className="form-control"
          name="age"
          type="number"
          value={age}
          placeholder="Edad"
          onChange={(e) => setAge(e.target.value)}
        ></input>

        <span className="base">{errorMessage}</span>
        <br />
        <div className="base">
      
            <button
              className="buttonEnviar"
              disabled={errorMessage}
              onClick={() => handleSubmit()}
            >
              Enviar
            </button>
          
        </div>
  
      </form>
    </div>
  );
}
const validate = (name, email, mobile, age) => {

  if (!name || !email || !age || !mobile) {
    return "ingrese todos los campos por favor";
  }
  if (parseInt(age) < 18) {
    return "Debe ser mayor de 18 años";
  }
  if (parseInt(age) > 100) {
    return "valide edad por favor";
  }
  if (!email.includes("@") || !email.includes(".")) {
    return "Correo incorrecto";
  }
};
