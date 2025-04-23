const mongoose=require("mongoose");
mongoose
.connect(process.env.DATABASE)
.then(()=>{
    console.log("Database connected")
})
.catch((err)=>{
    console.log(err)
})