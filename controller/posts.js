const Post = require('../models/post');



// const { findByIdAndUpdate } = require('../models/user');


const getAll = async (req, res) => {

  const posts = await Post.find()

  res.send({
    error: false,
    message: `All posts!`,
    posts
  })
};


const create = async (req, res) => {

  const post = await Post.create(req.body);

  res.send({
    error: false,
    message: `Post created`,
    post
  })
};


 const getOne = async (req, res) => {

  const post = await Post.findById(req.params.id);

  res.send({
    error: false,
    message: `Post with id #${post._id}, titled '${post.title}', has been fetched`,
    post: post
  });
};

const getUpdate = async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, req.body);
  const post = await Post.findById(req.params.id);

  res.send({
    error: false,
    message: `Post with id #${post._id} has been updated`,
    post
  });
};

const getDelete = async (req, res) => {

  await Post.findByIdAndDelete(req.params.id);
  
  res.send({
    error: false,
    message: `Post with id #${req.params.id} has been deleted`
  });
}



module.exports = {
    getAll,
    // getCreate,
    getOne,
    create,
    getUpdate,
    getDelete
  }
  