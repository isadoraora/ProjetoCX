const mongoose = require('mongoose');

//caracteristicas customer
// instancia um novo schema, que representa o objeto customer - utilizado no model
const clienteSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    email: String,
    senha: String
},
    {
        timestamps: true,
        toObject: {
            transform: function (doc, ret, options) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.senha;
                delete ret._v;
                return ret;
            }
        }
    });

// cria o model Cliente
// este método recebe uma string com o nome do model e um objeto Schemaema);
module.exports = mongoose.model('Cliente', clienteSchema)