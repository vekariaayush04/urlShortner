import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl : {
        type: String,
        required: true
    },
    shortUrl : {
        type: String,
        required: true
    },
    date : Date
})

export const Url = mongoose.model('url',urlSchema);

