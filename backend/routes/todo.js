const express = require('express')
const router = express.Router()

const { newPost, getPost, getSinglePost, updatePost, deletePost } = require('../controller/todoController')

//Get all Todo
router.route('/todo/').get(getPost)
//Get a single Todo with id
router.route('/todo/:id').get(getSinglePost)
//Post a Todo
router.route('/todo/new').post(newPost)
//Update a Todo
router.route('/todo/update/:id').put(updatePost)
//Delete a Todo
router.route('/todo/dalete/:id').delete(deletePost)

module.exports = router