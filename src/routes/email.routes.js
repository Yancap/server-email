const { Router } = require("express")
const emailRoutes = Router()
const EmailController = require('../controller/EmailController')
const emailController = new EmailController

emailRoutes.post('', emailController.create)

module.exports = emailRoutes