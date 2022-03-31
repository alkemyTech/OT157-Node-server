function adminMiddleware(req, res, next) {
    if (req.user.roleId == 1) { // 1 is admin role id
        next();
    } else {
        res.status(403).json({message: 'You are not authorized to access this page'});
    }
}

module.exports = adminMiddleware;