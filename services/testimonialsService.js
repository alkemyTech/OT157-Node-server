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
    },
    findByPk: async (id)=>{
        try {
            const testimonial= await db.testimonial.findByPk(id)
            return testimonial
        } catch (err) {console.log(err)}
    },
    update: async (data,id)=>{
        try {
            const testimonialUpdate= await db.testimonial.update(data,{where:{id:id}})
            return testimonialUpdate
        } catch (err) {console.log(err)}
    },
    destroy:async(id)=>{
        try {
            const countRowDestroy= await db.testimonial.destroy({where:{id:id}})
            return countRowDestroy
        } catch (err) {console.log(err)}

    }

}

module.exports=testimonialsControler