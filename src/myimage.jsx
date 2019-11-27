import React from 'react';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Feed } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function Myimage() {
        let [image, setImage] = useState([])

    useEffect(() => {
        fetch("http://localhost:3002/api/v1/gif/:gifid", {
            method: "GET",
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
                'token': localStorage.getItem('token')
            },

        })
            .then(response => response.json())
            .then(suc => {
                console.log(suc)
                if (suc.data.length > 0) {
                    setImage(suc.data)
                }
            })

    }, [])
    return (
        <div>
            <Feed>
                {
                    image.length > 0 && (

                        image.map((value, index) => {
                            return(
                            <Feed.Event>
                                <Feed.Content>
                                    <Feed.Date>{value.created_on}</Feed.Date>
                                    <Feed.Summary>
                                        {value.tittle}
                                    </Feed.Summary>
                                    <Feed.Extra images>
                                        <img src={value.url} />
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

export default Myimage