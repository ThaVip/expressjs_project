const express = require ('express')
const path = require('path')
const posts = require('./routes/posts')
const logger = require('./middleware/logger')
const errorHandler = require('./middleware/error')
const notFound = require('./middleware/notFound')
require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}))


//logger middleware
app.use(logger)

// app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/posts', posts)

//catch all
app.use(notFound)

//error middleware
app.use(errorHandler)

app.listen(port , ()=> {
    console.log(`server is up and runing on ${port}`)
})