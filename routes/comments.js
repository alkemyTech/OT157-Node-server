const express=require("express")
const router=express.Router()
const {validarJWT}=require("../middlewares/validarJWT");
const {esAdminRol}=require("../middlewares/validateRole")
const {getCommentsList}=require("../controllers/commentsController");

router.get("/",validarJWT,esAdminRol,getCommentsList)
module.exports=router