const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function authMiddleware(req, res, next) {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        try {
            const token = req.headers.authorization.split(' ')[1];
            const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

            req.userLogged = await User.findByPk(decodeToken.id).select("-password");
            return next();

        } catch (error) {
            const e = new Error('Invalid token');
            return res.status(403).json({message: e.message});
        }
        
    }
    res.status(403).json({message: 'You are not authorized to access this page'});
}

module.exports = authMiddleware;