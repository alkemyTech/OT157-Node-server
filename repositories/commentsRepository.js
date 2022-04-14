const Comment=require("../models/index")

const listAll=async()=>{
    return await Comment.findAll({
        attributes:['body'],
        order:[['createdAt','DESC']]
    })
}

module.exports={listAll}