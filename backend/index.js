require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const usersRouter = require('./controllers/users')
connectDB()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', usersRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`server running on port ${PORT}...`)
})
