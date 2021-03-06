import React, { useState, useEffect} from 'react'
import Postlist from '../components/Postlist'

function ListofPunsPage() {
    const [posts, setPosts] = useState([])
 

    const fetchData = async () => {
        try{
            //obtain the data before we do anything else
            const respone = await fetch("https://puns-app.herokuapp.com/puns")
            const data = await respone.json() // need to parse the data secondly json string converted into jsobject
            console.log(data)

            setPosts(data)
        } catch(error){
            console.log(error)
        }
    }

    useEffect( () => {
        fetchData();
    }, [])  ///adding second argument for empty array so useEffect only runs once, at "ComponentDidMount"
    //we need useEffect to make sure fetchData is called when data has been updated at CDM, at one specific time point
    
  return (
    <div>
        <h1>Posts</h1>

        <Postlist posts={posts}/>

    </div>
  )
}

export default ListofPunsPage