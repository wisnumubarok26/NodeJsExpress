import express from "express"
import request from "supertest"

const app = express()
app.use(express.json())

app.post("/json",(req,res)=>{
    const name = req.body.name
    res.json({
        name : `hello ${name}`
    })
})

test("test req json",async ()=>{
    const response = await request(app).post("/json")
    .set("Content-Type","application/json")
    .send({name:"wisnu"})

    expect(response.body).toEqual({name:"hello wisnu"})
})