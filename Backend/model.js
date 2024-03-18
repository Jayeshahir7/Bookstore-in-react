const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    BookID:Number,
    Bookimg:String,
    Title:String,
    Author:String,
    Genre:String,
    Price:Number,
});
module.exports =mongoose.model('Book',schema); 
