import React from 'react';
import { useEffect, useState } from 'react'
import { Button, Form,Icon,Header,TextArea, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function PostArticle(){
let [tittle,setTittle] = useState("")
let [article,setArticle] = useState("")
let submitForm = (e)=>{
    e.preventDefault()
    let url = 'http://localhost:3002/api/v1/auth/articles/'
    fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':"application/x-www-form-urlencoded",
             'token':localStorage.getItem('token')
    },
    body:`tittle=${tittle}&article=${article}`
})
.then(response=>response.json())
.then(suc =>{console.log(suc)
window.location = "http://localhost:3000/home/"
})
    
}
    return(
        <div>
            <Form  onSubmit={submitForm}>
            <Form.Field>
      <label>Tittle</label>
                <Input name="tittle" value={tittle} onChange={(e)=>setTittle(e.target.value)} placeholder="Tittle" />
                </Form.Field>
                <Form.Field>
      <label>Article</label>
                <TextArea name="article" value={article} 
                onChange={(e)=>setArticle(e.target.value)} 
                placeholder='Article' 
                style={{ minHeight: 100 }}/>
                </Form.Field>
                <Form.Field>
                <Button primary >Submit</Button>
                </Form.Field>
            </Form>
        </div>
    )
}

export default PostArticle