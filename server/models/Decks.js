const mongoose = require('mongoose')

const DeckSchema = new mongoose.Schema({
    author:{type:Schema.ObjectId,ref:'user',required:true},
    title:{type:String, required:true},
    description:{type:String, required:true},
    frontLanguage:{type:String},
    backLanguage:{type:String},
    cards:[{
        front:String,
        back:String,
        starred:Boolean,
        score:Number
    }]
})

const DeckModel = mongoose.model("decks",DeckSchema);
module.exports = DeckModel;