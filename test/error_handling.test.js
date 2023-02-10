import cookieParser from "cookie-parser"
import express from "express"
import request from "supertest"

const app = express()
//midleware
const errorMidleware=(err,req,res,next)=>{
    res.status(500).send(`terjadi error : ${err.message}`)
}

app.get("/",(req,res)=>{
    throw new Error("Ups")
})
app.use(errorMidleware)

test("test error",async ()=>{
    const response = await request(app).get("/")
    
    expect(response.status).toBe(500)
})
