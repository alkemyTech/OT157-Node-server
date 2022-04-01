const testimonialsService=require("../services/testimonialsService")
const {validationResult}=require("express-validator")
const testimonialsControler={
    list:async (req,res)=>{
        try {
            const testimonials=await testimonialsService.list()
            let response={
                meta:{
                    status:200,
                    count:testimonials.length,
                    url:"/testimonials"
                },
                data:testimonials
            }
            res.status(200).json(response)
        } catch (error) {
            let response={
                meta:{
                    status:500,
                    statusMessage:"Error server"
                },
                data:[]
            }
            res.status(500).json(response)
        }
    },
    create:async (req,res)=>{
        const validation=validationResult(req)
        const errors=validation.mapped()
        if (!validation.isEmpty()) {
            let response={}
            if (errors.name) {response.nameError=errors.name.msg}
            if (errors.content) {response.contentError=errors.content.msg}
            res.json(response)
        } else {
           try {
                const testimonial=req.body
                const testimonialCreated=await testimonialsService.create(testimonial)
                let response={
                    meta:{
                        status:200,
                        count:testimonialCreated.length,
                        url:"/testimonials"
                    },
                    data:testimonialCreated
                }
                res.status(200).json(response)
            } catch (error) {
                console.log(error);
                let response={
                    meta:{
                        status:500,
                        statusMessage:"Error server"
                    },
                    data:[]
                }
                res.status(500).json(response)
            } 
        }
    }
}
module.exports=testimonialsControler