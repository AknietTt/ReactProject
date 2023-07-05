import { useState } from 'react';
import './App.css';
import Input from './Components/Input/Input';
import SomeList from './SomeList';


function App() {
  const [formValues, setFormValues] = useState({});

  const [login, setLogin] = useState("");
  const [isLoginCorrect, setIsLoginCorrect] = useState(true);
    
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const[isButtonDisabled, setButtonisButtonDisable] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({login, password});
  }

  const onChangeInput = (e, name, pattern) => {
    const isMatch = e.target.value.match(pattern)
    setFormValues({...formValues, [name]: e.target.value })
    setLogin(formValues.login)
    setPassword(formValues.password)

    if(isMatch){
      if(name ==='login'){
        setIsLoginCorrect(true)
      }
      if(name ==='password'){
        setIsPasswordCorrect(true)
      }
      if(isLoginCorrect && isPasswordCorrect){
        setButtonisButtonDisable(false)
      }
      return
    }
    if(name === 'login' ){
      setIsLoginCorrect(false)
    }
    if(name==='password'){
      setIsPasswordCorrect(false)
    }
    setButtonisButtonDisable(true)
  }

  
  return (
    <div className="App">
      <div>
        <form onSubmit={onSubmit}>
          <Input name='login' title='Логин' onChange={(e)=>onChangeInput(e, "login", /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)} placeholder="Please fill your login" isCorrect={isLoginCorrect}  />      
          <Input name='password' title='Пароль' onChange={(e)=>onChangeInput(e, "password",/(?=.*\d).{6}/)} placeholder="Please fill your password" isCorrect={isPasswordCorrect}  />      
          <button type='submit' disabled = {isButtonDisabled}>Submit form</button>
      </form>
      <div>
        </div>
          <SomeList/>
      </div>
    </div>
  );
}

export default App;
