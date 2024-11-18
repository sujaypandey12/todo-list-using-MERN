const express=require("express")
const { createTodo } = require("./types")
const { todo } = require("./db")
const app=express()
app.use(express.json())
const cors=require("cors")
app.use(cors())
app.post("/todo",async function(req,res){
// creating a todo
const createPayLoad=req.body
const parsePayLoad=createTodo.safeParse(createPayLoad)
if(!parsePayLoad.success){
    res.status(411).json({
        msg :"you send a wrong inputs"
    })
    return
}else{
    await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })
}
 
})
app.get("/todos", async function(req,res){
    //getting a todo form database to use find function in database
    const todos= await todo.find({}); 
    res.json({
        todos
    }) 
})
app.put("/completed", async function(req,res){
    // for marking a specific todo is completed
    const updatedPayLoad=req.body
    const parsePayLoad=updatedPayLoad.safeParse(updatedPayLoad)
    if(!parsePayLoad.success){
        res.status(411).json({
            msg:"your inputs is wrong"
        })
        return 
    }else{
       await todo.update({
        _id:req.body.id
       },{
        completed:true
       })
       res.json({
        msg:" Todos marked  as completed"
       })
    }
})
app.listen(3000)