import React from 'react';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import User from './user'
import Feeds from './feed'
import Article from './article'
import PostArticle from './post-article'
import { Tab, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ShareImage from './share-image';
import Myarticle from './myarticle'
import Myimage from './myimage'
import CreateUser from './create-user'
function Home() {



    return (
        <div>
            <Button.Group>
            <Link to="/home/">  <Button size="medium" primary>Home</Button> </Link>
                <Link to="/home/post-article">  <Button size="medium" primary>Post Article</Button> </Link>
                <Link to="/home/share-image"><Button size="medium" primary>Share an Image</Button></Link>
                <Link to="/home/article"><Button size="medium" primary>My Articles</Button></Link>
                <Link to="/home/image"><Button size="medium" primary>My Image</Button></Link>
                {localStorage.getItem('jobrole') === 'admin' && (<Link to="/home/create-user"><Button size="medium" primary>Create User</Button></Link>)}
            </Button.Group>
            <Route exact path="/home" component={Feeds} />
            <Route path="/home/feed/:id" component={Article} />
            <Route path="/home/post-article" component={PostArticle} />
            <Route path="/home/share-image" component={ShareImage} />
            <Route path="/home/article" component={Myarticle}/>
            <Route path="/home/image" component={Myimage}/>
            <Route path="/home/create-user" component={CreateUser}/>

        </div>
    )

}


export default Home