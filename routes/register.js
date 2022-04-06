const {Router} = require("express");
const {postUser} = require("../controllers/registerController");
const router = Router();

router.post("/", postUser);
module.exports = router;
