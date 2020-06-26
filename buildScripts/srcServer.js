//reference to express, path, and open
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack'; // (*) tools to make webpack work
import config from '../webpack.config.dev'; //()

const port = 3000; //setting the port number
const app  = express(); //creating an instance of express
const complier = webpack(config); //*

/*eslint-disable no-console*/

app.use(require('webpack-dev-middleware')(complier, {   //*
  noInfo: true,
  publicPath: config.output.publicPath
}));

//which route express should handle (ROUTING): any references to the root should be handeled by the function
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
   if(err){
     console.log(err);
   }
   else{
     open('http://localhost:' + port);
   }
});
