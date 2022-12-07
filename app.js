const express = require('express')
require('dotenv').config()
const app = express()
const connectDB  = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const port = process.env.PORT || 5002
// Middleware

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('./public'))
// Routers

const tasks = require('./routers/tasks');
app.use("/api/v1/tasks", tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

// app.get("/", (req, res) => {
//     res.status(200).send("Hello world")
// })

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`listening at port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()