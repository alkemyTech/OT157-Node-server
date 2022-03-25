'use strict';
const db= require('../models');

exports.getOrganization= async (req,res)=>{
    await db.Organization.findAll(
    ).then(data =>{
        res.status(200).json(data);
    }).catch(err=>{
        res.status(400).json("erro for get Organization"+ err)
    })
}
