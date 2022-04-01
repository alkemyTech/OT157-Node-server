const db=require("../models/index")

const testimonialsControler={
    list: async ()=>{
        try {
            const testimonials=await db.testimonial.findAll()
            return testimonials
        } catch (err) {console.log(err)}
    },
    create: async (testimonial)=>{
        try {
            const testimonialCreated= await db.testimonial.create(testimonial)
            return testimonialCreated
        } catch (err) {console.log(err)}
    }

}

module.exports=testimonialsControler