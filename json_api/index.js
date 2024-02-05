const express = require('express')
const PORT = 3000;
const app = express();
const getdata = require('./solutioncode');

// app.use(getdata)

// Define routes
app.get('/', getdata)

app.listen(PORT, () => console.log(`server started on: ${PORT}`))



