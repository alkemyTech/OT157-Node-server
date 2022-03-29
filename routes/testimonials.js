const express=require("express")
const router=express.Router()
const testimonialsControler=require("../controllers/testimonialsController")
const validateTestimonial=require("../middlewares/validateTestimonial")
router.get("/",testimonialsControler.list)
router.post("/",validateTestimonial,testimonialsControler.create)

module.exports=router