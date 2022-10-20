import {} from 'dotenv/config'
import express from 'express'
import studentRouter from './app/routes/students.js'
const app = express()


app.use(express.json())


const port = process.env.PORT

//Load Routes
app.use("/", studentRouter)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})