const emailFunctions = require('../services/emails');

//emailFunctions.sendWelcomeEmail("franmassello7670@gmail.com");
//emailFunctions.sendDefaultEmail("franmassello7670@gmail.com", "Test", "Test");
const emailsController = {	
    sendWelcomeEmail: async (req, res) => {
        await emailFunctions.sendWelcomeEmail(req.body.email);
        res.status(200).json({ msg: "Email sent" });
    },
    sendDefaultEmail: async (req, res) => {
        await emailFunctions.sendDefaultEmail(req.body.email, req.body.subject, req.body.text);
        res.status(200).json({ msg: "Email sent" });
    }
}
module.exports = emailsController;