const db=require("../models/index")
const testimonialsControler={
    list:(req,res)=>{
        db.testimonial.findAll()
        .then(results=>{
            res.send("próximamente se renderizará el resultado de la respectiva búsqueda en la DB")
        })
        .catch()
    }
}

module.exports=testimonialsControler