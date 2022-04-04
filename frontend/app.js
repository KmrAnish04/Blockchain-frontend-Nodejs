const express = require('express');
const fs = require('fs');
const port=process.env.PORT || 8000

const app=express(); // this is our app

// Api Middlewares
app.use(express.json()); // this is to accept the data in json format
app.use(express.urlencoded()); // to decode the data sent though html form
app.use(express.static('public'));


// API Routes
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/post.html');
    // res.sendFile(__dirname + '/script.js');
    // res.sendFile(__dirname + '/style.css');
    console.log(`getting a get request on port: ${port}`);
})

app.post('/formPost/', (req,res)=>{
    let memeData=req.body;
    memeData["post_ID"]=Date.now;
    
    // var newData = JSON.stringify(memeData);
    // fs.appendFile('postData.json', newData, err => {
    //     // error checking
    //     if(err) throw err;

    fs.readFile('postData.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        obj.table.push(memeData); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('postData.json', json, 'utf8', function(err) {
            if (err) throw err;
            console.log('New Data added Successfully in the json file.😎😁');
            }
        
        ); // write it back 
    }});

    
        console.log("New data added");
    // });
    console.log(req.body); // the data that we will get through form
    res.sendFile(__dirname + '/post.html');
    
})

// Listening the port
app.listen(port, ()=>{
    console.log(`server started at http:localhost:${port}`)
})