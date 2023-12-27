import { useEffect, useState } from 'react'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'

export default function App() { 

  const [isConnecting, setIsConnecting] = useState(false)
  const [user, setUser] = useState({}) // objet vide

  // function handleSetUser(newUser){
  //   setUser(newUser)
  //   console.log(newUser)
  // }

  function handleIsConnecting(){ // sert a se souvenir d'un user connecté
    console.log(isConnecting,'cc')
    setIsConnecting(!isConnecting) // l'inverse de la valeur courante 
  }

  return (

    <div className='App'>
    

    {isConnecting ? (

      <Register handleIsConnecting={handleIsConnecting} />
    ):
    (
      <Login handleIsConnecting={handleIsConnecting} />
    )
    }
    
    </div>
  )
}