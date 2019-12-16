const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbconnection = require('./src/database/connection');
const cron = require('node-cron');
const path = require('path');
const app = express();

//looks for a file in your project .env that knows the port is available
dotEnv.config();

//db connection
dbconnection();

//ejs como view engine
// app.set('view engine','ejs')
// app.set('views','./src/views')

//cors configuration, its important to REST API to not get origin errors
app.use(cors());

//request payload middleware
app.use(express.urlencoded({ extended: true }));

//importing routes
const cliente = require('./src/routes/clienteRoute')
const analista = require('./src/routes/analistaRoute')
const pesquisa = require('./src/routes/pesquisaRoute')
// const media = require('./index')

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
app.use(express.static('doc'));
app.get('/api-doc', (req, res) => {
    res.sendFile(path.join(__dirname + '/../doc/index.html'))
})

app.use('/cliente', cliente)
app.use('/analista', analista)
app.use('/pesquisa', pesquisa)
// app.use('/media', media)

module.exports = app;