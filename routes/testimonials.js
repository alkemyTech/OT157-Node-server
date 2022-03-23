const express=require("express")
const router=express.Router()
const testimonialsControler=require("../controllers/testimonialsController")

router.get("/",(req,res)=>testimonialsControler.list)

module.exports=router