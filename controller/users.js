const User = require('../models/user');



// const { findByIdAndUpdate } = require('../models/user');


const getAll = async (req, res) => {

  const users = await User.find()

  res.send({
    error: false,
    message: `All Users`,
    post
  })
};




const create = async (req, res) => {

  const user = await User.create(req.body);

  res.send({
    error: false,
    message: `User created`,
    post
  })
};




module.exports = {
    getAll,
    // getCreate,
    // getUpdate,
    create
    // update,
  }
  