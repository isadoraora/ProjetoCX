const Cliente = require('../database/models/clienteModel');
const constants = require('../constants');
const clienteService = require('../service/clienteService');

exports.signup = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await clienteService.signup(req.body)
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.SIGNUP_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: signup ', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}

exports.login = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await clienteService.login(req.body);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.LOGIN_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: login ', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}
//Returning all cadastros
exports.findAll = (req, res) => {
    Cliente.find()
        .then(cliente => {
            res.send(cliente)
        }).catch(err => {
            res.status(500).send({
                mensagem: err.mensagem || 'Ocorreu um erro no carregamento dos cadastros.'
            })
        })
};

// //Finding a single cadastro by ID(do Mongo, tratado)
// exports.getId = (req, res) => {
//     Cliente.find({ "id": req.params.id }, (err, cliente) => {
//         if (err) return res.status(500).send(err);
//         return res.status(200).send(cliente);

//     })
// };

// //Update cadastro por CPF, validating request
// exports.update = (req, res) => {
//     if (!req.body.cpf) {
//         return res.status(400).send({
//             mensagem: 'Campos do cadastro não podem estar em branco.'
//         })
//     }
// }

// //Updating Cadastro
// exports.update = (req, res) => {
//     Cliente.updateOne(
//         { cpf: req.params.cpf },
//         { $set: req.body },
//         { upsert: false },
//     )
//         .then(() => {
//             return res.status(200).send({ mensagem: 'Cadastro atualizado com sucesso.' })
//         }).catch((err) => {
//             return res.status(400).send({ mensagem: err })
//         })
// };

// //Deleting cadastro by its CPF
// exports.delete = (req, res) => {
//     const cpf = req.params.cpf;
//     Cliente.findOne({ cpf }, function (err, cliente) {
//         if (err) return res.status(500).send(err)

//         if (!cliente) return res.status(200).send({
//             mensagem: `Infelizmente não localizamos o cpf: ${cpf}`
//         });
//         cliente.remove(function (err) {
//             if (!err) {
//                 return res.status(200).send({ mensagem: 'Cadastro removido com sucesso!' })
//             }
//         })
//     })
// }