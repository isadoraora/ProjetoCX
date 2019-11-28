const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema SAC(caracteristicas)
// instancia um novo schema, que representa o objeto SAC - utilizado no model
const CustomerExpSchema = new Schema({
    nomeAtendente: { type: String, required: true },
    login: { type: String },
    turno: { type: String },
    nota: { type: Number },
    mediaNotaHora: { type: Number }
},
    {
        versionKey: false
    });

// cria o model de SAC
// este método recebe uma string com o nome do model e um objeto Schema
const CustomerExp = new mongoose.model('CustomerExp', CustomerExpSchema);

module.exports = CustomerExp;