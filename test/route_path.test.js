import express from "express"
import request from "supertest"

const app = express()

app.get("/product/*.json",(req,res)=>{
   res.send(req.originalUrl)
})
app.get("/kategori/*(\\d+).json",(req,res)=>{
    res.send(req.originalUrl)
 })

test("test response status",async ()=>{
    let response = await request(app).get("/product/wisnu.json")

    expect(response.text).toBe("/product/wisnu.json")

})

test("test response status",async ()=>{
    let response = await request(app).get("/kategori/123.json")

    expect(response.text).toBe("/kategori/123.json")

})