const express = require('express');

const app = express();

app.use(express.json());

require("dotenv").config({path: "./config/.env"});

const PORT = process.env.PORT || 5006;

app.listen(PORT, (err) =>{
    err? console.log(err)
    : console.log(`Server is running on port http://127.0.0.1:${PORT}`)
})


const connect = require('./config/connectDB');

connect();



app.use('/api/user', require('./routes/userRoutes'))

