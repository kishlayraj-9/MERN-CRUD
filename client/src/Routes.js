import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './App'
import Create from './Create'
import SinglePost from './SinglePost'
import UpdatePost from './UpdatePost'
import Login from './Login'

const Routess = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<App/>} />
                <Route path="/create" element = {<Create/>} />
                <Route path="/login" element = {<Login/>} />
                <Route path= "/post/:slug" element={<SinglePost/>}/>
                <Route path= "/post/update/:slug" element={<UpdatePost/>}/>  
            </Routes>
        </BrowserRouter>
    )
}

export default Routess;