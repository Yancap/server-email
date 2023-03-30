const { Router } = require("express")

const emailRoutes = require('./email.routes')
const routes = Router()

routes.use('/email', emailRoutes)
module.exports = routes