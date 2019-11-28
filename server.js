const app = require('./src/app');
const port = 8000;

app.listen(port, function () {
    console.log(`O app está rodando na porta ${port}`)
})