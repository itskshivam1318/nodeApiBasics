var express = require("express");
var app = express();
var bodyParser = require('body-parser') 

console.log("Hello World");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/public/style.css',express.static(__dirname+"/public/style.css"))

app.use((req,res,next)=>{
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
  
})

app.get('/',(req,res)=>{
  const abspath = __dirname +  "/views/index.html"
  res.sendFile(abspath)
})



app.get('/json',(req,res)=>{
  if(process.env['MESSAGE_STYLE']==='uppercase'){
    res.json({
    "message":"HELLO JSON"
  })  
  }else{
    res.json({
    "message":"Hello json"
  }) 
  }
})


app.get('/now',(req,res,next)=>{
  req.time = new Date().toString()
  next()
},(req,res)=>
  res.json({time:req.time})
)


app.get('/:word/echo',(req,res)=>{
  const word = req.params.word
  res.json({echo:word})
})

app.post('/name',(req,res)=>{
  const firstname = req.body.first;
  const lastname = req.body.last;
  res.json({"name":`${firstname} ${lastname}`})
})

module.exports = app;
