const Comment=require("../models/index")

const listAll=async()=>{
    return await Comment.findAll({
        attributes:['body'],
        order:[['createdAt','DESC']]
    })
}

const update=async(data,id)=>{
    return await Comment.update(data,{
        where:{id}
    })
}

module.exports={listAll,update}