 /*
 try to create mongoose  Todo schema for this feature-
 Todo  {
   title: string,
   description:string,
   completed:boolean
 }
   */
  /* mongoose url
  mongodb+srv://sujay_1245:j082ab9hb14WqUNM@cluster0.b2zrb.mongodb.net/todos
  */

 const mongoose=require("mongoose")
 mongoose.connect("mongodb+srv://sujay_1245:j082ab9hb14WqUNM@cluster0.b2zrb.mongodb.net/todos")
 const todoSchema=mongoose.Schema({
   title:String,
   description:String,
   completed:Boolean
 })
 const todo=mongoose.model('todos',todoSchema);
 module.exports={
    todo:todo
 }
