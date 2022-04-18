const {listAll,update}=require("../repositories/commentsRepository")

const getCommentsList=async(req,res)=>{
    const comments=await listAll()
    if (!comments) return res.status(404).json({message:'No se encontraron comentarios'});
    return res.status(200).json(comments)
}

const updateComment=async(req,res)=>{
    const commentsUpdate=await update(req.body,req.params.id)
    if (!commentsUpdate) return res.status(404).json({message:'No se actualizó el comentario'});
    return res.status(200).json(commentsUpdate)


}

module.exports={getCommentsList,updateComment}