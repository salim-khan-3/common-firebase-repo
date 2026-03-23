import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import './App.css'
import { auth } from './Firebase.init'
import { useState } from 'react'

const googleProvider = new GoogleAuthProvider();

function App() {
  const [user,setUser] = useState();
console.log(user);


  const handleSignInGoogle = () => {
    signInWithPopup(auth,googleProvider)
    .then(result=> {
      setUser(result.user)
    })  .catch(error => {
        console.log(error)
      })
  }
  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      setUser(null)
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <h1>Vite + React</h1>
      
      
      
      {
        user? <button className='' onClick={handleSignOut}>sign out</button> : <button onClick={handleSignInGoogle}>sign in with google</button>
      }
      <p>{user?.email}</p>
      <p>{user?.displayName}</p>
    </>
  )
}

export default App
