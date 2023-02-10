import express from "express"
import request from "supertest"

const app = express()

app.get("/product/:id",(req,res)=>{
    const idProduct = req.params.id
   res.send(`product ${idProduct}`)
})
app.get("/kategori/:id(\\d+)",(req,res)=>{
    const idkategori= req.params.id
    res.send(`kategori ${idkategori}`)
 })

test("test response status",async ()=>{
    let response = await request(app).get("/product/wisnu")

    expect(response.text).toBe("product wisnu")

})

test("test response status",async ()=>{
    let response = await request(app).get("/kategori/123")

    expect(response.text).toBe("kategori 123")

})