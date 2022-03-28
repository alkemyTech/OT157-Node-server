require("dotenv").config();
const sgMail = require('@sendgrid/mail')
// Esta funcion recibe un email y le manda el mail de bienvenida, la funcioon se deberia llamar 
// cuando se registra un nuevo usuario. 
// Esta hecho usando SendGrid, me registre y genere una API key, cree un verified sender (el que esta en el .env)
// y tambien cargue el template del mail a SendGrid. Este template es dinamico, es decir le podes pasar variables
// por ej: algun nombre, alguna fecha, etc. En este caso le pase el titulo, el texto y el contact data.

function sendWelcomeEmail (to) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: to,
        from: process.env.SENDGRID_SENDER,
        templateId: process.env.SENDGRID_TEMPLATE_ID,   
        dynamic_template_data: {
            title: "Bienvenido a nuestra ONG",
            email_text: "Gracias por unirte a nuestra comunidad",
            contact_data:"Contacto: alkemy.node157@gmail.com"
        }
    }
    sgMail.send(msg)
};

// sendWelcomeEmail("franmassello7670@gmail.com") Linea para testear la funcion, 

module.exports = {
    sendWelcomeEmail
}