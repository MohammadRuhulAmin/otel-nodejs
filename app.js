const port  = process.env.PORT || "8080";
const express = require('express')
const app = express()


app.listen(parseInt(PORT,10),()=>{
    console.log(`Listening for requests on http://localhost:${PORT}`);
    
})