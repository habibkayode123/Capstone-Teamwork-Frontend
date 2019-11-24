import React from 'react';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Button, Checkbox, Form,Feed,Icon } from 'semantic-ui-react';
import Article from './article'
import 'semantic-ui-css/semantic.min.css'
import User from './user'

function Feeds()
{
 let result   
    let [datas,setDatas] = useState([])
    let [name,setName] =useState('let us see')
    useEffect(()=>{
        fetch("http://localhost:3002/api/v1/feed",{
      method:"GET",
      headers:{
          'Content-Type':"application/x-www-form-urlencoded",
           'token':localStorage.getItem('token')
  }})
  .then((response) =>response.json())
  .then((data)=> {
    result = data.map((value,index)=>{
        if(value.record_type =="Article"){
            return(
           
                <Feed.Event key={index}>
                    <Feed.Label>User</Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <User id={value.person_id}></User>
                            <Link to={`/home/feed/${value.article_id}`}>  {value.article} </Link>
                            <Feed.Date>{value.created_on}</Feed.Date>
                        </Feed.Summary>
                    </Feed.Content>
                    </Feed.Event> 
            )
        }
        return(
        
        <Feed.Event>
      <Feed.Label>User imag3</Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <User id={value.person_id}></User>
          <Feed.Date>{value.created_on}</Feed.Date> Share an image
        </Feed.Summary>
        <Feed.Extra images>
        <Link to={`/home/feed/${value.article_id}img`} >
           <img src={value.article} />
          </Link>  
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    )
  
    })
    setDatas(result)

})
    },[])
   
    
    
return(
    <div>
        <Feed>
        {datas}
        </Feed>
        
    </div>
    
)

}


export default Feeds