const express = require("express");
const router = express.Router();
const { getMembers, updateMember, deleteMember } = require("../controllers/memberController");
const { pagination } = require("../middlewares/paginationMiddleware_p1");

const { validarJWT } = require("../middlewares/validarJWT");
const { esAdminRol } = require("../middlewares/validateRole");

router.get("/", pagination, getMembers);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);

module.exports = router;
