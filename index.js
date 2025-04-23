const express = require("express")
const app= express();
const cors=require("cors")
const testroute=require("./Routes/Testroutes");
const categoryroute=require("./Routes/categoryroutes");
const productroute=require("./Routes/ProductRoutes");

require("dotenv").config();
app.use(cors());
PORT=process.env.PORT || 8080;
app.use(express.json());
require("./Database/connection");
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

app.use(testroute)
app.use("/category",categoryroute)
app.use("/product",productroute)