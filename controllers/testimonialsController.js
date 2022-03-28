const testimonialsService=require("../services/testimonialsService")
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
    }
}
module.exports=testimonialsControler