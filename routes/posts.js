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

module.exports = router;