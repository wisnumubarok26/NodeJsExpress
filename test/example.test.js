import cookieParser from "cookie-parser"
import express from "express"
import request from "supertest"

const app = express()

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/contoh.txt")
})

test("test req json",async ()=>{
    const response = await request(app).get("/")
    
    expect(response.text).toContain("ini contoh file")
})
