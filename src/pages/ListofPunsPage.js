import React, { useState, useEffect} from 'react'
import Postlist from '../components/Postlist'

function ListofPunsPage() {
    //use hook useState to 
    const [posts, setPosts] = useState([])


    const fetchData = async () => {
        try{
            //obtain the data before we do anything else
            const respone = await fetch("https://puns-app.herokuapp.com/puns")
            const data = await respone.json() // need to parse the data secondly
            console.log(data)

            setPosts(data)
        } catch(error){
            console.log(error)
        }
    }

    useEffect( () => {
        fetchData();
    }, []) //adding second argument for empty array so useEffect only runs once, at "ComponentDidMount"
  return (
    <div>
        <h1>Posts</h1>

        <Postlist />

    </div>
  )
}

export default ListofPunsPage