import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";


export const Login = () => {

  // Extraemos user y setUser del contexto usando useContext
  const { setUser } = useContext(Context);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  // Método para validar el campo username
  const handleUsernameV = e => {
    const value = e.target.value.replace(/\s+/g, '').toLowerCase();
    setUsername(value);
  };

  //Metodo para valdar el nombre
  const hangleNameV = e => {
    const value = e.target.value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    setName(value)
  }

  //Metodo para valdar el Phone
  const hanglePhoneV = e => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setPhone(value)
  }

  // Método que se ejecuta al hacer clic en enviar en el formulario
  const saveData = e => {
    e.preventDefault();

    // Crear el objeto del usuario a partir de los datos del formulario
    let identified_user = {
      username: e.target.username.value,
      name: e.target.name.value,
      phone: e.target.phone.value
    }


    // Actualizamos el estado del usuario
    setUser(identified_user);
    navigate('/');
  };


  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form className="login" onSubmit={saveData}>
        <input type="text" name="username" placeholder="username" value={username} onChange={handleUsernameV} required />
        <input type="text" name="name" placeholder="name" value={name} onChange={hangleNameV} required />
        <input type="text" name="phone" placeholder="phone" value={phone} onChange={hanglePhoneV} />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
