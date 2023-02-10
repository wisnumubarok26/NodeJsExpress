import express from "express"
import request from "supertest"

const app = express()

app.get("/",(req,res)=>{
    res.redirect("/to-next-page")
})

test("test response header",async ()=>{
    const response = await request(app).get("/")

    expect(response.get("Location")).toBe("/to-next-page")
    
})