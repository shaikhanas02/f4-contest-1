import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [fullName,setFullName] = useState() ;
  const [email,setEmail] = useState() ;
  const [password,setPassword] = useState() ;
  const [confirmPassword,setConfirmPassword] = useState() ;
const [message, setMessage] = useState() ;
function handleClick(e){
  e.preventDefault() ;
  if(fullName && email && password && confirmPassword && (password=== confirmPassword)){
    setMessage("Successfully Signed Up!")
  }
  else{
    setMessage("Error : All the fields are mandatory")
  }
}

  return (
    <div className="App">
      <form>
      <div className='sign-up'>
      <h1>Sign UP Form</h1>
      <div className='inputs'>
      <input type="text" placeholder='FULL NAME' value = {fullName} onChange={(e)=>setFullName(e.target.value)}></input>
    <input type="e-mail" placeholder='E-MAIL'  value = {email} onChange={(e)=>setEmail(e.target.value)}></input>
    <input type="password" placeholder='PASSWORD'  value = {password} onChange={(e)=>setPassword(e.target.value)}></input>
    <input type="password" placeholder='CONFIRM PASSWORD'  value = {confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
      </div>
      <h3>{message}</h3>
  
      <button onClick={(e)=>handleClick(e)} >Submit</button>
      </div>
      </form>
    </div>
  );
}

export default App;
