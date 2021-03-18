  
const express = require('express');
const app = express();

// const { quotes } = require('./data');
const { api } = require('./api.js');

// const apiQuotes  =  require('./apiQuotes.js');
// app.use('/api/quotes',apiQuotes);

const PORT = process.env.PORT || 3000   ;

// app.use(express.static('public'));



app.listen(PORT,()=>{
    console.log(`Server id listening at ${PORT}`);
});