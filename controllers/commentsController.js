const {listAll}=require("../repositories/commentsRepository")

const getCommentsList=async(req,res)=>{
    const comments=await listAll()
    if (!comments) return res.status(404).json({message:'No se encontraron comentarios'});
    return res.status(200).json(comments)
}

module.exports={getCommentsList}