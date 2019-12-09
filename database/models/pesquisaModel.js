const mongoose = require('mongoose');

//caracteristicas da pesquisa
const PesquisaSchema = new mongoose.Schema({
    email: { type: String },
    senha: { type: String },
    quemTeAtendeu: { type: String },
    canalAtendimento: { type: String }, //o mesmo analista pode trab em +de 1 canal.
    notaAtendimento: { type: Number },
    voltariaFazerNegocio: { type: Boolean },
    indicariaParaAmigo: { type: Boolean } // aqui e em cima pra conseguirmos calcular NPS.
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


//cria o model Pesquisa
module.exports = mongoose.model('Pesquisa', PesquisaSchema)