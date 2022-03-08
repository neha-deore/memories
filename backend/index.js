import express from 'express'
import cors from 'cors'
import { connectdb } from './config/mongodb.js';
import postRoutes from './routes/postRoutes.js'
const PORT = 5000
const app = express();

// app.use(bodyParser.json({limit: "30mb", extended:true}))
// app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(express.json({limit: "30mb", extended:false}))
app.use(express.urlencoded({limit:"30mb", extended:false}))
app.use(cors());

connectdb();
app.use('/posts', postRoutes)

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`working on ${PORT}`)
}) 