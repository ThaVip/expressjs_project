const express = require ('express')
const path = require('path')
const posts = require('./routes/posts')
require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();


// app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/posts', posts)


app.listen(port , ()=> {
    console.log(`server is up and runing on ${port}`)
})