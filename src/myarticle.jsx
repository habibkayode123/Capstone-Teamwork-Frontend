import React from 'react';
import { useEffect, useState } from 'react'
import { Feed } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function Myarticle() {

    let [article, setArticle] = useState([])

    useEffect(() => {
        fetch("http://localhost:3002/api/v1/article/:personid", {
            method: "GET",
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
                'token': localStorage.getItem('token')
            },

        })
            .then(response => response.json())
            .then(suc => {
                if (suc.data.length > 0) {
                    setArticle(suc.data)
                }
            })

    }, [])
    return (
        <div>
            <Feed>
                {
                    article.length > 0 && (
                        article.map((value, index) => {
                            return (
                                <Feed.Event>
                                    <Feed.Label></Feed.Label>
                                    <Feed.Content>
                                        <Feed.Date>{value.created_time}</Feed.Date>
                                        <Feed.Summary>
                                            {value.tittle}
                                        </Feed.Summary>
                                        <Feed.Extra text>
                                            {value.article}
                                        </Feed.Extra>
                                    </Feed.Content>
                                </Feed.Event>)
                        })

                    )
                }
            </Feed>
            
        </div>
    )



}

export default Myarticle