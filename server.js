const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URI)
app.use(express.json())
app.use("/api",require("./routes/productRoute"))



mongoose.connect("mongodb+srv://hedi:hedi@cluster0.6imlm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>console.log("database connected"))









const PORT= process.env.PORT
app.listen(PORT,()=>console.log("my server is rynning on port",PORT))