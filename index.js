const express=require('express');
const app=express();


app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.get('/about', function (req, res) {
    res.send('about')
  })
app.post('/send',function(req,res){
  res.send(req)
})


  //Launch listening server on port 8080
app.listen(8080, function () {
    console.log('App listening on port 8080!')
})
  
