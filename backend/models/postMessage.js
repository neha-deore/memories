import mongoose from 'mongoose'

const postMessageSchema = new mongoose.Schema({
    title:{
        type: String,
    },

    message:{
        type:String,
    },

    creator:{
        type:String,
    },

    tags:{
        type:[String]
    },

    selectedFile:{
        type:String
    },

    likeCount:{
        type:Number,
        default:0
    },
    
    createdAt:{
        type:Date,
        default: Date.now
    }
})
const PostMessage = mongoose.model ('PostMessage',postMessageSchema)
export default PostMessage;