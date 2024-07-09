import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';


const UpdatePost = () => {
    let given_slug = useParams();
    const [ state, setState] = useState({
        title: "",
        content: "",
        slug:"",
        user:""
    });

    const {title, content, slug, user} = state;
    
    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_API}/post/${given_slug.slug}`)
        .then(response => {
            const {title, content, slug, user} = response.data;
            setState({...state, title, content, slug, user})
        })
        .catch(err => alert("Error Loading single post"));
    }, []);


    function handleChange(name){
        return function(event){
            setState({...state, [name]:event.target.value});
        };
    };

    const handleSubmit = event => {
        event.preventDefault()
        //console.table({title, content, user});
        axios.put(`${process.env.REACT_APP_API}/post/${given_slug.slug}`, {title, content, user})
        .then(response =>{
            console.log(response)
            const {title, content, slug, user} = response.data;
            //empty the state
            setState({...state, title, content,slug, user})
            //show success alert
            alert(`Post titled ${title} is updated `)
        })
        .catch(error => {
            console.log(error.response);
            alert(error.response.data.error);
        })
    }

    const showUpdateForm = () => (
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input onChange={handleChange('title')}  value = {title} type="text" className="form-control" placeholder="Post title" required />
                </div>
                <div className="form-group">
                    <label className="text-muted">Content</label>
                    <textarea onChange={handleChange('content')} value = {content} type="text" className="form-control" placeholder="Write Something..." required />
                </div>
                <div className="form-group">

                    <label className="text-muted">User</label>
                    <input  onChange={handleChange('user')}value = {user} type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div>
                    <button className="btn btn-primary">Update Post</button>
                </div>
            </form>
        )

    return (
        <div className= "container pb-5" >
            <Nav/>
            <br/>
            <h1>UPDATE POST</h1>
            {showUpdateForm()}
        </div>
            
)}

export default UpdatePost;