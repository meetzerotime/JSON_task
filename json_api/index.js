const express = require('express')
const fs = require('fs')
const app = express();
const Data = require('./test3');
const getdata = require('./test3');

app.use(getdata)

// Define routes
app.get('/', getdata)

app.listen(4000, () => {
    console.log("Server is running on port 3001");
});



