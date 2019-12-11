const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbconnection = require('./database/connection');
const cron = require('node-cron');

//looks for a file in your project .env that knows the port is available
dotEnv.config();

const app = express();

//db connection
dbconnection();

//cors configuration, its important to REST API to not get origin errors
app.use(cors());

//request payload middleware
app.use(express.urlencoded({ extended: true }));

//importing routes
const cliente = require('./routes/clienteRoute')
const analista = require('./routes/analistaRoute')
const pesquisa = require('./routes/pesquisaRoute')

//request content-type app/json. it helps parsing the content into json file
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

//error handling middleware
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    })
})
app.use('/ping')
res.status(200).send({message:"ola"})
app.use('/', cliente)
app.use('/analista', analista)
app.use('/pesquisa', pesquisa)
