import mongoose from 'mongoose'

// connection of database
const db="mongodb://localhost:27017/memories_project"
export const connectdb = async () => {
    try{
        await mongoose.connect(db, {useNewUrlParser: true})
        console.log("mongo connected")
    }
    catch (err){
        console.log(err.message)
    }
}