const express = require('express');

const routes = express.Router()
const {listAll,inserUser} = require('../controllers/user')

const {inserPost,listAllPost} = require('../controllers/posts')


const {inserComments,listAllComments} = require('../controllers/comments')


routes.get('/users',listAll)
routes.post('/insertposts',inserUser)



routes.get('/lisAllPosts',listAllPost)
routes.post('/addPost',inserPost)



routes.get('/listAllComments',listAllComments)
routes.post('/comments',inserComments)

module.exports = routes;