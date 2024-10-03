const express = require('express')
const router = express.Router()

let posts = [
    {id: 1, tittle: 'post one'},
    {id: 2, tittle: 'post two'},
    {id: 3, tittle: 'post three'}
]


//get all post
router.get('/', (req,res)=>{
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0 , limit))
    }
    res.status(200).json(posts)
})

//get a single post
router.get('/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((post)=> post.id === id)
    console.log(post)
    if (!post){
    return res
        .status(404)
        .json(`A post with the id of ${id} was not found`)    
    } 
    res.status(200).json(post)
})

//create newPost
router.post('/', (req, res)=>{
    const newPost ={
        id : posts.lenght + 1,
        tittle : req.body.tittle
    }
    if (!posts.tittle){
        return res.status(400).json({msg:'tittle not found'})
    }
    posts.push(newPost)
    res.status(201).json(posts)
})

//update posts
router.put('/:id', (req, res)=>{
    const id = parseInt(req.params)
    const post = posts.find((post)=> post.id === id)
    
    if(!post){
        return res
        .status(404)
        .json(`the post with the id ${id} was not found`)
    }
    post.tittle = req.body.tittle
    res.json(posts);
})

router.delete('/:id', (req, res)=>{
    id = parseInt(req.params)
    post = posts.find((post)=> post.id === id)
    if(!post){
        return res
        .status(404)
        .json(`there is no post with this ${id} id`)
    }
    posts = posts.filter((post)=> post !==post.id)
    res.json(posts);
})

module.exports = router;