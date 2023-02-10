import express from "express"

const app = express()

//basic routing

app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/wisnu",(req,res)=>{
    res.send("apa kabar wisnu")
})

app.listen(3000,()=>{
    console.info("port terhubung")
})