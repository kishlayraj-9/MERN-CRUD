import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';


const SinglePost = () => {
    let slug = useParams();
    const [ post, setPost] = useState('')
    
    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_API}/post/${slug.slug}`)
        .then(response => {
            console.log(response);
            setPost(response.data)
        })
        .catch(err => alert("Error Loading single post"));
    }, []);

    return (
        <div className= "container pb-5" >
            <Nav/>
            <br/>
            <h1>{post.title}</h1>
            <p className="lead">{post.content}</p>
            <p>Author <span className="badge"> {post.user} </span></p>
        </div>
)}

export default SinglePost;