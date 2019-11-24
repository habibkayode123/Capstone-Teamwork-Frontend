import React from 'react';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route,Redirect } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function Login() {
 let   [email,setEmail] = useState("")
let    [password,setPasssword] = useState("")
let     [go,setGo] = useState(false)
    let login = (e) =>{
        e.preventDefault()
         fetch("http://localhost:3002/api/v1/auth/signin",{
            method:"POST",
            headers:{
                'Content-Type':"application/x-www-form-urlencoded"
            },
            body:`email=${email}&password=${password}`
        })
        
        .then((response) => response.json())
        .then((data) => {
            if(data.status !== "success")
            {
console.log("nooo")
            }
            console.log(data)
            localStorage.setItem("token",data.token)
            setGo(true)
        
        })
    }
    if(go){
        return   <Redirect to="/home" />
    }

    return (
        <div>
        
            <Form onSubmit={login}>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' value = {email} onChange ={(e) =>setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='password' type="password" value = {password} onChange ={(e) =>setPasssword(e.target.value)} />
                </Form.Field>
                
                <Button type='submit'>Submit</Button>
            </Form>


           
        </div>
    )
}

export default Login;