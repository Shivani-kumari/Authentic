import React  , {useState,useEffect} from  "react"
import fire from "./fire"
import Login from './Login'
import Profile from './Profile'

import './App.css';

function App() {
  const  [user, setuser]   =useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [emailError,setEmailError] = useState('')
  const [passwordError,setPasswordError] = useState('')
  const [hasAccount,setHasAccount] = useState(false)
  

  const clearInputs = () =>{
    setEmail("")
    setPassword("")
  }

  

  const clearErrors = () =>{
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin =()=>{
    clearErrors()
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err=>{
      switch(err.code) {
        case "auth/invalid-email":
        case "auth/user/disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
      }
    })
  };
  const handleSignUp =()=>{
    clearErrors()
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err=>{
      switch(err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
          case "auth/week-password":
            setPasswordError(err.message);
            break;
      }
    })
  }
  const handleLogOut = ()=> {
    fire.auth().signOut();
  }
  
  const authListener =()=>{
    fire.auth().onAuthStateChanged(user=>{
      if(user){
        clearInputs()
        setuser(user)
      }else{
        setuser("")
      }
    })
  }
  useEffect(()=>{
    authListener()
  },[])
  return (
    <div className="App">
      {user ?  (
        <Profile  handleLogOut={handleLogOut}/>
      ): (
<Login  
      email={email}
       password={password} 
       setEmail={setEmail} 
       setPassword={setPassword}
       handleLogin={handleLogin}
       handleSignUp={handleSignUp}
       hasAccount={hasAccount}
       setHasAccount={setHasAccount}
       emailError={emailError}
       passwordError={passwordError}
       />
      )} 
      
       
     
    </div>
  );
}

export default App;