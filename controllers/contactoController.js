'use strict';
const repository =require('../repositories/contactoRepository');


exports.updateContacto=async (req,res)=>{
    const id = req.params.id;
    
    const updateContacto=repository.updateContacto(req.body,id);
    if(!updateContacto){
        res.status(400).json({ message: "error updating organization"});
    }else{
        res.status(200).json('UPDATE');
    }
}