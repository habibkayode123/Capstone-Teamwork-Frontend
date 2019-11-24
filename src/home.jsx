import React from 'react';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import User from './user'
import Feeds from './feed'
import Article from './article'
import 'semantic-ui-css/semantic.min.css'
function Home()
{
    
    
return(
    <div>
<Route exact path="/home" component ={Feeds}/>
<Route  path="/home/feed/:id"  component={Article}/>
    </div>
)

}


export default Home