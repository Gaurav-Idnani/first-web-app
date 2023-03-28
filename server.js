'use strict'

const express= require ('express');
const app = express();
// the above two lines are responsible for getting the express library
// and using that to start a new server

const port = process.env.PORT || 3001;
const path = require ('path');
const filePath=path.resolve ('','sessions.json');
const sessions = require (filePath);

app.get ('/',(req,res)=>{
    res.send('<h1> hello world!!</h1>');
    // the send individually handles all the things for us, 
    // that includes sending the headers along, handling the closing of port and all

});

app.get ('/api/sessions',(req,res)=>{
    res.json(sessions);
});

app.listen(port, ()=>{
    console.log (`express server running on ${port}`);
    console.log ('nodemon running');
});

