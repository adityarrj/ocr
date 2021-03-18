const express = require('express');
const app = express();

const api = express.Router();

import Tesseract from 'tesseract.js';

apiQuotes.get('/random',(req,res,next)=>{
    Tesseract.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png',{lang : 'eng'})
    .catch(err=>{
        console.log(err);
    })
    .then(result=>{
        let text = result.text;
    })
    res.send({
        text});
});
apiQuotes.get('/test',(req,res,next)=>{
    res.send({ans:"hello we are working"});
});