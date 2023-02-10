import express from "express"
import request from "supertest"

const app = express()

app.get("/",(req,res)=>{
    const type = req.get("Accept")
    res.send(`hello ${type}`)
})

test("test express",async ()=>{
    const response = await request(app).get("/").set("Accept","text/plan")

    expect(response.text).toBe("hello text/plan")
})