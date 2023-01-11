// import usefull packages
const express = require("express")

//import models
const db = require("./models/index.js")

const {item, user} = db

//import controllers
const UserController = require("./controllers/userController")
const ItemsController = require("./controllers/itemsController")

//initialize controllers
const usersController = new UserController(user)
const itemsController = new ItemsController(item)

//import routers
const ItemsRouter = require("./routers/itemsRouter")
const UsersRouter = require("./routers/usersRouter")

//initialize routers
const usersRouter = new UsersRouter(usersController).routes()
const itemsRouter = new ItemsRouter(itemsController).routes()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/users", usersRouter)
app.use("/items", itemsRouter)



const PORT = process.env.PORT || 3002

app.listen(PORT, ()=>{console.log(`App listening on port ${PORT}`)})