const { validationResult } = require("express-validator");
const userService = require("../services/userService");
const jwt = require('jsonwebtoken')
const { User } = require('../models/index');

const usersController = {
  login: async function (req, res) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      await userService.postLogin(req, res);
    } else {
      return res.status(400).json(errors);
      console.log(errors);
    }
  },
  me: async (req, res) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

      try {
          const token = req.headers.authorization.split(' ')[1];
          const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

          const user = await User.findByPk(decodeToken.user.id, {
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt']
            } 
          });

          return res.status(200).json(user);

      } catch (error) {
          const e = new Error('Invalid token');
          return res.status(403).json({message: e.message});
      }
      
  }
    res.status(403).json({message: 'You are not authorized to access this page'});
  },
  update: async (req, res) => {
      const id = req.params.id;
      const { firstName, lastName, image, email } = req.body;

      try {
        const user = await User.findByPk(id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        const userToUpdate = await User.update({
          firstName,
          lastName,
          image,
          email,
        },
        {
          where: { id }
        });
        
        return res.status(200).json({
          message: 'User updated successfully',
          user: await User.findByPk(id, { attributes: {
            exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt']
          }})
        });

      } catch (error) {
        return res.status(400).json(error);
      }
  }
};

module.exports = usersController;
