import express from "express"
import request from "supertest"

const app = express()

app.get("/",(req,res)=>{
    res.set({
        "X-Powered-By":"wisnumubarok",
        "X-Author":"wisnu"
    })
    res.send("hallo")
})

test("test response header",async ()=>{
    const response = await request(app).get("/")

    expect(response.text).toBe("hallo")
    expect(response.get("x-powered-by")).toBe("wisnumubarok")
    expect(response.get("x-author")).toBe("wisnu")
})