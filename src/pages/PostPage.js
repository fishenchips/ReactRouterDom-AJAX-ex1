import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import PostContent from '../components/PostContent';


function PostPage() {
    //change to single post, setPost
    const [post, setPost] = useState([])
    //use data from URL
    const params = useParams();
 

    const fetchData = async () => {
        try{
            //obtain the data before we do anything else
            const respone = await fetch("https://puns-app.herokuapp.com/puns/" + params.id)
            const data = await respone.json() // need to parse the data secondly json string converted into jsobject
            console.log(data)

            setPost(data)
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
        <h1>unique site for {params.id}</h1>
        <PostContent post={post} />
    </div>
  )
}

export default PostPage