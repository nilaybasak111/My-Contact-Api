const express = require("express");
const app= express();
const dotenv = require("dotenv").config();
const errorHandler = require ("./middlewares/errorHandler.js");
const connectdb = require("./config/dbConnection.js");

connectdb();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', require("./routes/ContactRoutes.js"));
app.use('/api/users', require("./routes/UsersRoutes.js"));
app.use( errorHandler );

app.listen(port, ()=> {
    console.log(`Server is up on ${port}`);
})
