import cookieParser from "cookie-parser"
import express from "express"
import request from "supertest"
import expressFileUpload from "express-fileupload"

const app = express()
//buildt in midleware
app.use(expressFileUpload())

app.post("/",async(req,res)=>{
    const textFile = req.files.article
    await textFile.mv(__dirname+`/contohUpload/`+textFile.name)

    res.send(`hello ${req.body.name}, you upload ${textFile.name}`)
})


test("test error",async ()=>{
    const response = await request(app).post("/")
    .field(`name`,`wisnu`)
    .attach(`article`,__dirname+`/contoh.txt`)
    
    expect(response.text).toBe(`hello wisnu, you upload contoh.txt`)
})
