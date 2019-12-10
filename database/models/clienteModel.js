const mongoose = require('mongoose');

//caracteristicas customer
// instancia um novo schema, que representa o objeto customer - utilizado no model
const clienteSchema = new mongoose.Schema({
    email: { type: String},
    senha: { type: String},
    nome: { type: String},
    cpf: { type: Number}
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

// cria o model Customer
// este método recebe uma string com o nome do model e um objeto Schemaema);
module.exports = mongoose.model('Cliente', clienteSchema)