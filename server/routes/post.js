const express = require('express')
const router = express.Router() 


//import controller methods

const {create, list, read, update, remove} = require('../controllers/post')

router.post('/post', create );
router.get('/posts', list );
router.get("/post/:slug", read );
router.put("/post/:slug", update);
router.delete("/post/:slug", remove );

 //req.params.slug
/*
router.get('/post', (req, res) => {
    console.log("Hello")
    res.send('POST request to the homepage')
})*/

module.exports = router;
