const emailHelper = require("../helpers/emails");

const sendMail = async(req,res)=>{

    try {
        
        emailHelper.sendSignUpMail(req.body.name, req.body.email, req.body.content);
        
        res.status(200).json({success:true, msg: 'Mail Sent Successfully!'});

    } catch (error) {
        res.status(400).json({success:false, msg: error.message});
    }

}

module.exports = {
    sendMail
}