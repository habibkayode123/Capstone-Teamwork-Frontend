import React from 'react';
import { useEffect, useState } from 'react'
import {Feed} from 'semantic-ui-react'


function User(props){
    let [name,setName] = useState("")
    useEffect(()=>{
            
            fetch(`http://localhost:3002/api/v1/getperson/${props.id}`,{
               method:"GET",
               headers:{
                   'Content-Type':"application/x-www-form-urlencoded",
                    'token':localStorage.getItem('token')
           }})
           .then((response) => response.json())
           .then((data) =>{
        setName(`${data.data.firstname} ${data.data.lastname}`)
       
              })
       
          
       
    },[])
    return(
        <Feed.User>{name}</Feed.User>
    )
}
export default User