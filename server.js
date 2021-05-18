//GET ENVIRONMENTAL VARIABLES
require("dotenv").config()

//GET PORT FROM ENV VARIABLES
const PORT = process.env.PORT

//IMPORT DEPENDENCIES
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

//IMPORT DATABASE CONNECTION
const mongoose = require("./db/connection"); //This allows Node to run the connection file before server.js!

//CREATE EXPESS APPLICATION OBJECT
const app = express()

//Setup Middleware
app.use(cors()) // <----- add cors headers
app.use(express.json()) // <---- parses JSON bodies and adds them to req.body
app.use(morgan("tiny")) // <----- logging for debugging

//ROUTES
app.get("/", (req, res) => res.send("Server is working"))

//Import places router
const placesRouter = require("./controllers/places")
app.use("/places", placesRouter)

//Server Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))