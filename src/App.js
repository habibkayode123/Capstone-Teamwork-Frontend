import React from 'react';
import useEffect from 'react'
import { BrowserRouter as Router, Link, Route,Redirect } from 'react-router-dom'
import Login from  './login.jsx'
import Home from './home';

const HomeRoute =  ({component:Component,...rest}) =>(
  <Route {...rest} render={  (props) =>{
    let getToken = localStorage.getItem("token")
    if (getToken == null){
      return <Redirect to ='/login' />
    }
     fetch("http://localhost:3002/api/v1/verifytoken",{
      method:"POST",
      headers:{
          'Content-Type':"application/x-www-form-urlencoded",
      },
      body:`token=${getToken}`
  })
  .then((response) =>response.json())
  .then((data)=>{
    if (data.status !== 'ok'){
      return <Redirect to="/login"/>
    }
  })
  
return <Component/>  
} }/>
)

function App() {
  
  return (
    <div>
      i am inside app
    <Router>
           
  <Route exact path="/" render={()=><Redirect to="/home"/>}/>
  <HomeRoute path = "/home" component={Home}></HomeRoute>
  <Route path="/login" component = {Login} />
  
    </Router>
    </div>
  );
}


export default App;
