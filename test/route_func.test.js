import express from "express"
import request from "supertest"

const app = express()

app.route("/product")
.get((req,res)=>{
    res.send("get product")
})
.post((req,res)=>{
    res.send("create product")
})
.put((req,res)=>{
    res.send("update product")
})

test("test route get",async ()=>{
    let response = await request(app).get("/product")
    expect(response.text).toBe("get product")

})

test("test route post",async ()=>{
    let response = await request(app).post("/product")
    expect(response.text).toBe("create product")

})
test("test route put",async ()=>{
    let response = await request(app).put("/product")
    expect(response.text).toBe("update product")

})