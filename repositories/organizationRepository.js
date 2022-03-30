'use strict';
const db= require('../models');

const getDataOrganization=async () =>{

    const data= await db.Organization.findAll({
        attributes:['name', 'image', 'phone', 'address']
    }) 
    return data;
}


const updateOrganization=async (data,id)=>{
    const updateData= await db.Organization.update({
        name:data.name,
        image:data.image,
        address:data.address,
        phone: data.phone,
        email: data.email,
        welcomeText:data.welcomeText,
        aboutUsText:data.aboutUsText
    },{
        where:{
          id:id,
        }
    });
    
    return updateData
}
/*name: DataTypes.STRING,
image: DataTypes.STRING,
address: DataTypes.STRING,
phone: DataTypes.INTEGER,
email: DataTypes.STRING,
welcomeText: DataTypes.TEXT,
aboutUsText: DataTypes.TEXT,
deletedAt: DataTypes.DATE
*/
module.exports={
    getDataOrganization,
    updateOrganization
}