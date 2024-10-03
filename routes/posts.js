const express = require('express')
const router = express.Router()

let posts = [
    {id: 1, title: 'post one'},
    {id: 2, title: 'post two'},
    {id: 3, title: 'post three'}
]

//get all post
router.get('/', (req,res, next)=>{
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0 , limit))
    }
    res.status(200).json(posts)
})

//get a single post
router.get('/:id', (req, res, next)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((post)=> post.id === id)
    if (!post){
        const error = new Error(`the id for user ${id} is not found`)
        error.status = 404
        return next(error)
    } 
    res.status(200).json(post)
})

//create newPost
router.post('/', (req, res, next)=>{
    const newPost ={
        id : posts.length + 1,
        title : req.body.title
    }
    if (!posts.title){
        const error = new Error(`please include a new title`)
        error.status=404
        return next(error)
    }
    posts.push(newPost)
    res.status(201).json(posts)
})

//update posts
router.put('/:id', (req, res, next)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((post)=> post.id === id)
    
    if(!post){
        const error = new Error(`the id for user ${id} is not found`)
        error.status = 404
        return next(error)
    }
    post.title = req.body.title
    res.json(posts);
})

//delete
router.delete('/:id', (req, res,next)=>{
    id = parseInt(req.params.id)
    post = posts.find((post)=> post.id === id)
    if(!post){
        const error = new Error(`the id for user ${id} is not found`)
        error.status = 404
        return next(error)
    }
    posts = posts.filter((post)=> post.id !==id)
    res.json(posts);
})

module.exports = router;