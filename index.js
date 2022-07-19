const express=require("express")
const start=require("./scrapers")
var cors = require('cors')
var app = express()
 
app.use(cors())
app.use(express.json())

app.get("/",async(req,res)=>{
      try {
          let data=await start()
        
          res.status(200).send(data)
      } 
      catch (error) {
          res.send(error)
      }
})

app.listen(5000,async()=>{
    try {
        console.log("listening on port... 5000");
    } 
    catch (error) {
        console.log(error) 
    }
})