import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')

  // Justo para el ejercicio
  const [errorFirstName, setErrorFirstName] = useState('')
  const [errorLastName,setErrorLastName] = useState('');
  const [errorEmail,setErrorEmail] = useState('');
  const [errorPassword,setErrorPassword] = useState('');
  const [errorConfirmPassword,setErrorConfirmPassword] = useState('');

  const handleErrorFirstName = (e) =>{
    setFirstName(e);
    if(e.length < 2){
      if(e == ''){
        setErrorFirstName('');
      }
      else if(e.length < 2){
        setErrorFirstName('First name must be at least 2 characters');
      }
    }
    else{
      setErrorFirstName('');
    }
  }
  //Termina método de error del nombre
  const handleErrorLastName = (e) =>{
    setLastName(e);
    if(e.length < 2){
      if(e==''){
        setErrorLastName('');
      }
      else if( e.length < 2){
        setErrorLastName('Last name must be at least 2 characters');
      }
    }
    else{
      setErrorLastName('');
    }
  }
  // Termina método de error del apellido

  const handleErrorPassword = (e) =>{
    setPassword(e);
    if(e.length < 8){
      if(e == ''){
        setErrorPassword('');
      }
      else{
        setErrorPassword('Password must be at least 8 characters');
      }
    }
    else{
      setErrorPassword('');
    }
  }
  // Termina método de error de la contraseña

  const handleErrorPasswordConfirmation = (e) =>{
    setPasswordConfirm(e);
    if(e.length < 8){
      if(e == ''){
        setErrorConfirmPassword('');
      }
      else{
        setErrorConfirmPassword('Confirm password must be at least 8 characters');
      }
    }
    else if(password != e){
      setErrorConfirmPassword('Passwords must match');
    }
    else{
      setErrorConfirmPassword('');
    }
  }

  return (
    <div>
      <h1>Formulario</h1>
      <form>
        <div>
          <label>First name: </label>
          <input type='text' name='firstName' onChange={(e) => handleErrorFirstName(e.target.value)}/>
          <p>{errorFirstName}</p>
        </div>

        <div>
          <label>Last name: </label>
          <input type='text' name='lastName' onChange={(e) => handleErrorLastName(e.target.value)}/>
          <p>{errorLastName}</p>
        </div>

        <div>
          <label>Password: </label>
          <input type='password' name='password' onChange={(e) => handleErrorPassword(e.target.value)}></input>
          <p>{errorPassword}</p>
        </div>

        <div>
          <label>Confirm password: </label>
          <input type='password' name='passwordConfirm' onChange={(e) => handleErrorPasswordConfirmation(e.target.value)}></input>
          <p>{errorConfirmPassword}</p>
        </div>
      </form>
      
    </div>
  );
}

export default App;
