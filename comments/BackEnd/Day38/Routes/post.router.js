const express = require('express');
const PostModel = require('../Models/post.model.js')
const router = express.Router();

router.post('/create_post', async (req, res) => {
    const { user_id, message } = req.body;
    const newPost = await new PostModel({ user_id: user_id, message: message });
    newPost.save();
    res.send(newPost)
});

router.get('/get_post', async (req, res) => {
    const posts = await PostModel.find({}).populate('user_id');
    res.send(posts);
});

router.delete('/delete_post', async (req, res) => {
    const { post_id } = req.body;
    const deletedPost = await PostModel.deleteOne({ _id: post_id });

    res.send(deletedPost.deletedCount ? { message: "Post successfully deleted" } : {
        message: "Something went wrong"
    })
});

router.post('/update_post', async(req, res) => {
    const {post_id, message} = req.body;
    const updatedPost = await PostModel.updateOne()
})

module.exports = router