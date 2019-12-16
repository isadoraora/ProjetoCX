const mongoose = require('mongoose');

//caracteristicas da pesquisa
const PesquisaSchema = new mongoose.Schema({
    email: { type: String },
    quemTeAtendeu: { type: String },
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
                delete senha;
                return ret;
            }
        }
    });


//cria o model Pesquisa
module.exports = mongoose.model('Pesquisa', PesquisaSchema)