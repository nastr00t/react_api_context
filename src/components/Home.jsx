import { useContext } from "react"
import { Context } from "../context/Context"

export const Home = () => {
  const {user} = useContext(Context);
  return (
    <div><h1>home</h1>
      <p>Esta es la página de Home </p>
      <p>!Bienvenid@ <strong>{user.name}</strong> </p></div>
  )
}
