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
            console.log(error)
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
            let response={
                meta:{
                    status:400,
                    statusMessage:"Error del cliente"
                },
                Error:[]
            }
            if (errors.name) {response.Error.push(errors.name.msg) }
            if (errors.content) {response.Error.push(errors.content.msg)}
            res.status(400).json(response)
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
                        statusMessage:"Error multiple server"
                    },
                    data:[]
                }
                res.status(500).json(response)
            } 
        }
    },
    update:async(req,res)=>{
        const validation=validationResult(req)
        const errors=validation.mapped()
        try{
            const testimonialUpdating=await testimonialsService.findByPk(req.params.id)
            if (testimonialUpdating && validation.isEmpty()) {
                const countRowUpdate=await testimonialsService.update(req.body,req.params.id)
                const testimonialUpdate=await testimonialsService.findByPk(req.params.id)
                let response={
                    meta:{
                        status:200,
                        countRowsUpdate:countRowUpdate,
                        url:"/testimonials/id"
                    },
                    data:testimonialUpdate
                }
                res.status(200).json(response)
            } else if (testimonialUpdating==null) {
                let response={
                    meta:{
                        status:400,
                        statusMessage:"Error del cliente"
                    },
                    Error:'No existe el testimonio que se quiere actualizar'
                }
                res.status(400).json(response)
            } else {
                let response={
                    meta:{
                        status:400,
                        statusMessage:"Error del cliente"
                    },
                    Error:[]
                }
                if (errors.name) {response.Error.push(errors.name.msg) }
                if (errors.content) {response.Error.push(errors.content.msg)}
                res.status(400).json(response)
            }

        } catch(error) {
            console.log(error)
        }
        
        /* const validation=validationResult(req)
        const errors=validation.mapped()
        if (!validation.isEmpty()) {
            let response={
                meta:{
                    status:400,
                    statusMessage:"Error del cliente"
                },
                Error:[]
            }
            if (errors.name) {response.Error.push(errors.name.msg) }
            if (errors.content) {response.Error.push(errors.content.msg)}
            res.status(400).json(response)
        } */
    }
}
module.exports=testimonialsControler