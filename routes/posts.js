const express = require('express')
const router = express.Router()
const { getPosts, getPost, updatePost, deletePost, createPost } = require('../controllers/postController');

//get all post
router.get('/', getPosts)

//get a single post
router.get('/:id', getPost)

//create newPost
router.post('/', createPost)

//update posts
router.put('/:id',updatePost)

//delete
router.delete('/:id', deletePost)

module.exports = router;