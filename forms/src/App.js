
import './App.css';
import {useState} from "react";


function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');
  const [confpassword, setConfpassword]= useState('');

      
    const handleChange =(e)=>{
      setName(e.target.value);
    }
   
    const handleAgeChange =(e)=>{
      setAge(e.target.value);
    }

  const handleEmailchange= (e) =>{
    setEmail(e.target.value);
  }

  const handlePasswordchange= (e) =>{
    setPassword(e.target.value);
  }

  const handleconfpassword =(e)=>{
    setConfpassword(e.target.value);
  }

  const handlesubmit= (e)=>{
    if(password !== confpassword){
      alert("you have entered a wrong password");
    }
    else{
      alert('"A form was submitted with Name:"'+name+'"Age :"'+age+'"A Email"'+email);
    }
    e.preventDefault();
  }

  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handlesubmit(e)}}>
    <h2>React-forms</h2>
    <h3> Sign-up Form</h3>
   
    <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
          
        <label >
          Age:
        </label><br/>
        <input type="text" value={age} required onChange={(e)=> {handleAgeChange(e)}} /><br/>

          <label>Email:

          </label><br/>
          <input type="email" value={email} required onChange={(e)=>{handleEmailchange(e)}} /><br/>
          
          <label>Password</label><br/>

          <input type="password" value={password} required onChange={(e)=>{handlePasswordchange(e)}} /><br/>

          <label>Conform password</label><br/>
          <input type="password" value={confpassword} required onChange={(e)=>{handleconfpassword(e)}} /><br/>
          
          <input type="submit" value="Submit"/>

    </form>
    </header>
    </div>
    );
  }



export default App;
