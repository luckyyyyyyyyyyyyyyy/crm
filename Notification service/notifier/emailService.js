const nodemailer= require("nodemailer")
module.exports = nodemailer.createTransport({
    service: "gmail",
    debug: true,
    auth: {
        user: 'chandu16.538@gmail.com',
        pass: 'fagixttdbdriokvn'
    }
    
})