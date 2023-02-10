import cookieParser from "cookie-parser"
import express from "express"
import request from "supertest"

const app = express()
app.use(cookieParser())
app.use(express.json())

app.get("/",(req,res)=>{
    const name = req.cookies.name
    res.send(`hello ${name}`)
})

app.post("/login",(req,res)=>{
    const name = req.body.name
    res.cookie("login",name,{path:"/"})
    res.send(`hello ${name}`)
})

test("test req json",async ()=>{
    const response = await request(app).get("/")
    .set("Cookie","name=wisnu;author=mwm")
    
    expect(response.text).toEqual("hello wisnu")
})
test("test cookie",async ()=>{
    const response = await request(app).post("/login")
    .send({name:"nunu"})
    
    expect(response.get("Set-Cookie").toString()).toBe("login=nunu; Path=/")
    expect(response.text).toBe("hello nunu")
})