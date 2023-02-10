import express from "express"
import request from "supertest"

const app = express()

app.get("/",(req,res)=>{
    if(req.query.name){
        res.status(200)
        res.send(`hello ${req.query.name}`)
    }else{
        res.status(400)
        res.end()
    }
})

test("test response status",async ()=>{
    let response = await request(app).get("/")
    .query({name:"wisnu"})

    expect(response.status).toBe(200)
    expect(response.text).toBe("hello wisnu")

    response= await request(app).get("/")
    expect(response.status).toBe(400)

})