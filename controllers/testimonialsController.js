const db=require("../models/index")
const testimonialsControler={
    list:(req,res)=>{
        db.testimonial.findAll()
        .then(testimonials=>{
            let response={
                meta:{
                    status:200,
                    count:testimonials.length,
                    url:"/testimonials"
                },
                data:testimonials
            }
            res.json(response)
            
        })
        .catch(error=>{
            console.log(error);
            let response={
                meta:{
                    status:500,
                    statusMessage:"Error server"
                },
                data:[]
            }
            res.json(response)
        })
    }
}

module.exports=testimonialsControler