import express from "express"
import request from "supertest"

const app = express()

app.get("/",(req,res)=>{
    res.send(`hello ${res.query.name} ${res.query.umur}`)
})

test("test req header ",async ()=>{
    const response = await request(app)
    .get("/")
    .query({name:"wisnu",umur:"19"})
    expect(response.text).toBe(`hello wisnu 19`)
})