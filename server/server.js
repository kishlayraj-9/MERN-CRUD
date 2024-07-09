const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()

//import routes
const postRoutes = require('./routes/post')
const authRoutes = require('./routes/auth')

//app
const app = express()

//db
mongoose.connect(process.env.DATABASE, {
    
    //useNewUrlParser: true, 
    //useCreateIndex: true, 
    //useFindandModify: false, 
    //useUnifiedTopology: true 
    
})
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

//middlewares
app.use(cors())
app.use(morgan('dev'))  // morgan used in dev mode
app.use(bodyParser.json())

//route middleware
app.use('/api', postRoutes);
app.use('/api', authRoutes);

//port
const port = process.env.PORT || 8000
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})
 
