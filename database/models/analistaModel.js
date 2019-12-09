const mongoose = require('mongoose');

//caracteristicas analistas de atendimento
// instancia um novo schema, que representa o objeto analistas - utilizado no model
const AnalistasSchema = new mongoose.Schema({
    user: { type: String },
    password: { type: String },
    channel: { type: String },
},
    {
        timestamps: true,
        toObject: {
            transform: function (doc, ret, options) {
                ret.id = ret._id;
                delete ret._id;
                delete ret._v;
                return ret;
            }
        }
    });

// cria o model Analista
// este método recebe uma string com o nome do model e um objeto Schema
module.exports = mongoose.model('Analistas', AnalistasSchema)