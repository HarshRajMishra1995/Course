const express = require('express')
const cors = require("cors")
const bodyParser=require("body-parser")
const app = express()
const port = 8000
app.use(cors())
app.use(bodyParser.urlencoded())

app.post("/form", (req, res) => {
  console.log(req.body)
  console.log(req.url)
  res.send("hello")
})
app.get("/getform", (req, res) => {
  console.log(req.query)
  console.log(req.url)
  res.send("hi")
})
app.listen(port, () => {
  console.log("App is listening at port ",port)
})
