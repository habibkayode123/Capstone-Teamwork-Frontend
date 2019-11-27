import React from 'react';
import { useEffect, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function CreateUser() {
    const [options, setOption] = useState([
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ])
    let [lastName, setLastName] = useState("")
    let [firstName, setFirstName] = useState("")
    let [jobrole,setJobrole] =useState("")
    let [address,setAddress] =useState("")
    let [email,setEmail] =useState("")
    let [department,setDepartment] =useState("")
    let [gender,setGender] =useState("") 
    let [password,setPassword] =useState("")
    let formSubmit =e =>{
        fetch("http://localhost:3002/api/v1/auth/create-use",{
            method:"POST",
            headers:{
                'Content-Type':"application/x-www-form-urlencoded",
                'token':localStorage.getItem('token')
            },
            body:`password=${password}&email=${email}&firstname=${firstName}&lastname=${lastName}&gender=${gender}&jobrole=${jobrole}&address=${address}&department=${department}`
        })
        
        .then((response) => response.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <Form onSubmit={formSubmit}>
                <Form.Input
                value={firstName} onChange={e=>setFirstName(e.target.value)}
                    error={{ content: 'Please enter employee first name', pointing: 'below' }}
                    fluid
                    label='First name'
                    placeholder='First name'
                />
                <Form.Input type='password'
                value={password} onChange={e=>setPassword(e.target.value)}
                    error={{ content: 'Please enter employee password', pointing: 'below' }}
                    fluid
                    label='Password'
                    placeholder='Password'
                />
                <Form.Input
                value={lastName} onChange={e=>setLastName(e.target.value)}
                    error='Please enter employee last name'
                    fluid
                    label='Last name'
                    placeholder='Last name'
                />
                <Form.Input
                onChange={e=>setJobrole(e.target.value)}
                value={jobrole}
                    error='Please enter employee jobrole'
                    fluid
                    label='Jobrole'
                    placeholder='jobrole'
                />
                <Form.Input
                onChange={e=>setAddress(e.target.value)}
                value={address}
                    error='Please enter employee address'
                    fluid
                    label='Address'
                    placeholder='address'
                />
                <Form.Input
                onChange={e=>setEmail(e.target.value)}
                value={email}
                    type='email'
                    error='Please enter employee email'
                    fluid
                    label='Email'
                    placeholder='email'
                />
                <Form.Input
                onChange={e=>setDepartment(e.target.value)}
                value={department}
                    error='Please enter employee department'
                    fluid
                    label='Department'
                    placeholder='Department'
                />

                <Form.Select value={gender} onChange={(e,{value})=>{setGender(value)
                console.log(value)}} options={options} placeholder='Gender' error />
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

export default CreateUser