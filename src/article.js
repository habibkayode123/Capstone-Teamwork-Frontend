import React from 'react';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Button, Checkbox, Form,Feed,Icon,Comment,Header,TextArea } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import User from './user'


function Article(props){
    let result
    let[comment,setComment]=useState("")
    let [comm,setComm]= useState()
 let [image,setImage] = useState(false)
    let [datas,setDatas] = useState()

        useEffect(()=>{
            let check = props.match.params.id.split('')
            let url = `http://localhost:3002/api/v1/articles/${props.match.params.id}`
            if (check[check.length-1]==="g"){
                setImage(true)
                let imgId = parseInt(check.splice(0,check.length-3).join(""))
            url =`http://localhost:3002/api/v1/gifs/${imgId}`

            }
            fetch(url,{
          method:"GET",
          headers:{
              'Content-Type':"application/x-www-form-urlencoded",
               'token':localStorage.getItem('token')
      }})
      .then((response) =>response.json())
      .then((data)=> {setDatas(data)
        setComm(data.data.comments)
          
      })},[])
      
      let submitComment = (e)=>{
          
        fetch(`http://localhost:3002/api/v1/gifs/${datas.data.id}/comment`,{
            method:"POST",
            headers:{
                'Content-Type':"application/x-www-form-urlencoded",
                 'token':localStorage.getItem('token')
        },
        body:`comment=${comment}`
    })
    .then(response=>response.json())
    .then(suc =>console.log(suc))
      }


     if(datas == undefined) return (<div>loading</div>)
     if(image === false) {return(<div><Feed>
        <Feed.Event>
          <Feed.Label> User
          </Feed.Label>
          <Feed.Content>
          <Feed.Date>{datas.data.createdOn}</Feed.Date>
           {datas.data.article}
          </Feed.Content>
        </Feed.Event>
      </Feed></div>)}
     return(
         <div>{<Feed>
            <Feed.Event>
              <Feed.Label >user</Feed.Label>
              <Feed.Content>
                <Feed.Date>{datas.data.createdOn}</Feed.Date>
                <Feed.Summary>
                    <User id={datas.data.personId}/>
                Posted an image
                </Feed.Summary>
                <Feed.Extra images>
                  <img src={datas.data.url}/>
                </Feed.Extra>
              </Feed.Content>
         </Feed.Event>
          </Feed>
        

        }
        <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>
    {
comm !== undefined &&  (<div>{comm.map((value,index)=>
    (<Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'><User id={value.person_id}/></Comment.Author>
        <Comment.Metadata>
          <div>{value.created_on}</div>
        </Comment.Metadata>
        <Comment.Text>{value.comment}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
</Comment>))}</div>)
        
}
<Form  method="POST" onSubmit={(e)=>{
    e.preventDefault()
    submitComment(e)
    console.log(comment)}}>
      <TextArea name="comm" value ={comment} onChange={(e) =>{
        e.preventDefault()
        setComment(e.target.value)}}/>
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
    </Comment.Group>
        </div>
     
)




}

export default Article
