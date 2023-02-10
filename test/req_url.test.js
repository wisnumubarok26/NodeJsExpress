import express from "express"
import request from "supertest"

const app = express()

const a = app.get("/hello/wisnu",(req,res)=>{
    res.json({
        path : req.path,
        originalUrl : req.originalUrl,
        hostname : req.hostname,
        protocol : req.protocol
    })
})

test("test req url ",async ()=>{
    const response = await request(app).get("/hello/wisnu")
    .query({name:"wisnu"})

    expect(response.body).toEqual({
        path : "/hello/wisnu",
        originalUrl : "/hello/wisnu?name=wisnu",
        hostname : "127.0.0.1",
        protocol : "http"
    })
})