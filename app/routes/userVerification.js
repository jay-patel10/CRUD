const express = require("express");
const bodyParser = require("body-parser");

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use(express.static('public'));
    
    const userController = require("../services/userVerification");
    app.post('/mail',userController.sendMail);
  };