import './App.css';
import {useState, useEffect} from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Deck from './pages/deck';

function App() {
  <Router>

    
  </Router>
  
  
  
  
  
  const [listOfUsers,setListOfUsers] = useState([]);
  const [name,setName] = useState("");
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  },[]);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser",{
      name:name,
      username:username,
      email:email
    }).then((response)=> {
      setListOfUsers([...listOfUsers,{name:name,username:username,email:email}])
    });
  }

  return (<div className="App">
    <div className="usersDisplay">
      {listOfUsers.map((user) =>{
      return (
        <div>
          <h1>Name: {user.name}</h1>
          <h1>Username: {user.username}</h1>
          <h1>Email: {user.email}</h1>
        </div>
      );
    })}
    </div>
    <div className="userForm">
      <input type="text" placeholder="Name" onChange={(e)=>{
        setName(e.target.value);
        }}/>
      <input type="text" placeholder="Username" onChange={(e)=>{
        setUsername(e.target.value);
        }}/>
      <input type="text" placeholder="Email" onChange={(e)=>{
        setEmail(e.target.value);
        }}/>
      <button onClick={createUser}>Create User</button>
    </div>
  </div>
  );
}

export default App;
