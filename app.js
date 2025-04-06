const PORT  = process.env.PORT || "8000";
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hellow World')
})

app.listen(parseInt(PORT,10),()=>{
    console.log(`Listening for requests on http://localhost:${PORT}`);
    
})