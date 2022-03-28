const express=require("express")
const router=express.Router()
const testimonialsControler=require("../controllers/testimonialsController")

router.get("/",testimonialsControler.list)

module.exports=router