import React from 'react';
import { useEffect, useState } from 'react'
import { Button, Form, Icon, Header, TextArea, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function ShareImage() {
    let data = "just checking"

    let [tittle, setTittle] = useState("")
    let [image, setImage] = useState("")
    let submitForm = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append("image",image)
        formData.append("ticreateImageBitmapttle",tittle)
        fetch("http://localhost:3002/api/v1/gifs/",{
            method:"POST",
            headers:{
                //"Content-Type":"multipart/form-data",
            'token':localStorage.getItem('token')
        },
        body:formData
    })
    .then(response =>console.log(response.json()))
    }

    return (
        <div>
            <Form  onSubmit={submitForm}>
                <Form.Field>
                    <label>Tittle</label>
                    <Input name="tittle" value={tittle} onChange={(e) => setTittle(e.target.value)} placeholder="Tittle" />
                </Form.Field>
                <Form.Field>
                    <label>Image</label>
                    <Input type="file" name="image" placeholder='image' onChange={(e)=>{
                        
                    data=e.target.files[0]
            setImage(e.target.files[0])
                
                console.log(image,data)
                    }} />
                </Form.Field>
                <Form.Field>
                    <Button primary >Submit</Button>
                </Form.Field>
            </Form>
        </div>
    )
}

export default ShareImage