const express=require("express")
const router=express.Router()
const {validarJWT}=require("../middlewares/validarJWT");
const {esAdminRol}=require("../middlewares/validateRole")
const {getCommentsList,updateComment}=require("../controllers/commentsController");

router.get("/",validarJWT,esAdminRol,getCommentsList)
router.put("/:id",updateComment)
module.exports=router