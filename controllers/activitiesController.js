'use strict';
const db = require('../models');

exports.getActivities= async (req,res)=>{
    try {
        const data = await db.Activity.findAll();
        console.log();
        return res.status(200).json(data);
    } catch (error) {
       res.status(400).json("error getting activities"+ error)
    }   
}