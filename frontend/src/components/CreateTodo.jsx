import {useState} from "react";
export function CreateTodo(){
     const[title,setTitle]=useState("");
     const[description,setDescription]=useState("");


     return (<div>
        <input  type="text" placeholder="title"  onChange={function(e){
         const value=e.target.value;
         setTitle(e.target.value)
        }}></input>
        <br/>
        <input type="text" placeholder="description"
        onChange={function(e){
         const value=e.target.value;
         setDescription(value)
        }}></input>
        
        <br/>
        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{
               method: "POST",
               body: JSON.stringify({
                  title:title,
                  description:description
               }),
               headers:{
                  "Content-type":"application/json" // because app.json() in backend checking that the data coming is json or not in header
               }
            })
            .then(async function(res){
               const json=await res.json();
               alert("TODO ADDED")
            })
        }}>ADD a Todo</button>
     </div>
     )
}