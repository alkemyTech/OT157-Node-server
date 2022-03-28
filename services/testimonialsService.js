const db=require("../models/index")

const testimonialsControler={
    list: async ()=>{
        try {
            const testimonials=db.testimonial.findAll()
            return testimonials
        } catch (err) {console.log(err)}
    }
}

module.exports=testimonialsControler