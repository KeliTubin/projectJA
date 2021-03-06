import express from 'express';
// import fs from 'fs';
import createUser from './user/createUser';
import getUser from './user/getUser';
import getUserS from './user/getUserS';
import deleteUser from './user/deleteUser';
import createPost from './posts/createPost'
import getPost from './posts/getPost';
import getPosts from './posts/getPosts';
import createComment from './comments/createComment';
import getComment from './comments/getComment';
import getComments from './comments/getComments'

const router = express.Router();
// var userRoutes: String[] = [];

// fs.readdirSync(__dirname + '/user').forEach(function(file){
//     userRoutes.push(file.substring(0, file.indexOf('.')));
// });
router.use('/users', [createUser, getUser, getUserS, deleteUser]);
router.use('/posts', [createPost, getPost, getPosts]);
router.use('/comments', [createComment, getComment, getComments]);

export default router;