import express from "express"
import request from "supertest"

const logger = (req,res,next)=>{
    console.info(`berhasil masuk ${req.method} ${req.originUrl}` )
    next()
}
const addpowerHeader=(req,res,next)=>{
    res.set("X-Powered-By","wisnu")
    next()
}
const apiKey = (req,res,next)=>{
    if(req.query.apiKey){
        next()
    }else{
        res.status(401).end()
    }
}
    

const app = express()

app.use(logger)
app.use(apiKey)
app.use(addpowerHeader)

app.get("/",(req,res)=>{
    res.send("hello response")
})
app.get("/wisnu",(req,res)=>{
    res.send("hello wisnu")
})

test("test response status",async ()=>{
    let response = await request(app).get("/").query({apiKey:"123"})
    expect(response.text).toBe("hello response")

})
test("test response status",async ()=>{
    let response = await request(app).get("/wisnu").query({apiKey:"123"})
    expect(response.text).toBe("hello wisnu")

})
