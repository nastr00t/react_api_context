import { useContext } from "react"
import { Context } from "../context/Context"

export const Contact = () => {
  const {user} = useContext(Context); 
  return (
    <div>
      <h1>Contact</h1>
      <p>Esta es la página de Contacto</p>
      <p>Estos son los datos de contacto de: <strong>{user.phone}</strong></p>
      <p>Objeto:{ JSON.stringify(user)}</p>
    </div>
  )
}
