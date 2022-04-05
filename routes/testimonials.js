const express=require("express")
const router=express.Router()
const testimonialsControler=require("../controllers/testimonialsController")
const validateTestimonial=require("../middlewares/validateTestimonial")
const protegerRutas=require("../middlewares/protegerRutsas")
router.get("/",testimonialsControler.list)
router.post("/",protegerRutas,validateTestimonial,testimonialsControler.create)

module.exports=router