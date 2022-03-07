import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { getUser } from './redux/ducks/user';
import axios from 'axios';
import Counter from './Counter';

function App() {

  const dispach = useDispatch();

  useEffect(()=>{
    dispach(getUser());
  },[]);

  const count = useSelector((state)=>state.counter.count);
  const user = useSelector((state)=>state.user.user);

  const voters = ['Dharanitharan', 'Vinoth', 'Aravinth', 'Melvin'];

  // Get from NodeJs and Express
  const [userFromExpress, setUserFromExpress] = useState(undefined);

  useEffect(()=>{
    axios.get('http://localhost:8081/userFromExpress').then((res)=>{
      const responseData = res.data;
      setUserFromExpress(responseData);
    })
  },[]);
  
  return (
    <div className="App">
      <h1>Redux App</h1>

      <p>User from Fake API : </p>
      {user && `${user.firstName} ${user.lastName}`}
      <p>User from Express : </p>
      {userFromExpress && `${userFromExpress.firstName} ${userFromExpress.lastName}`}

      <h2>Total Count : {count}</h2>
      {voters.map((voter, index)=>(
        <Counter name={voter} key={index} />
      ))}
    </div>
  );
}

export default App;
