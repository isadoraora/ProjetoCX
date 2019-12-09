const Cliente = require('../database/models/clienteModel');
const constants = require('../constants');
const clienteService = require('../service/clienteService');

module.exports.signup = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await userService.signup(req.body);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.SIGNUP_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: signup ', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}

module.exports.login = async (req, res) => {
    let response = { ...constants.defaultServerResponse }
    try {
        const responseFromService = await userService.login(req.body);
        response.status = 200,
            response.message = constants.clienteAnalistaMessage.LOGIN_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Algo deu errado: Controller: login ', error)
        response.message = error.message
    }
    return res.status(response.status).send(response);

}


// //creating and saving new Customer
// exports.create = (req, res, next) => {
//     const cliente = new Cliente(req.body)
//     cliente.save()
//         .then(data => {
//             res.status(201).send({
//                 mensagem: 'Cadastro efetuado com sucesso!'
//             });
//         }).catch(err => {
//             res.status(500).send({
//                 mensagem: err.mensagem || 'Ocorreu um erro no cadastro, tente novamente.'
//             })
//         })

// };

//Returning all cadastros
exports.findAll = (req, res, next) => {
    Cliente.find()
        .then(cliente => {
            res.send(cliente)
        }).catch(err => {
            res.status(500).send({
                mensagem: err.mensagem || 'Ocorreu um erro no carregamento dos cadastros.'
            })
        })
};

//Finding a single cadastro by CPF
exports.getCpf = (req, res, next) => {
    Cliente.find({ "cpf": req.params.cpf }, (err, cliente) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(cliente);

    })
};

//Update cadastro por CPF, validating request
exports.update = (req, res, next) => {
    if (!req.body.cpf) {
        return res.status(400).send({
            mensagem: 'Campos do cadastro não podem estar em branco.'
        })
    }
}

//Updating Cadastro
exports.update = (req, res) => {
    Cliente.updateOne(
        { cpf: req.params.cpf },
        { $set: req.body },
        { upsert: true },
    )
        .then(() => {
            return res.status(200).send({ mensagem: 'Cadastro atualizado com sucesso.' })
        }).catch((err) => {
            return res.status(400).send({ mensagem: err })
        })
};

//Deleting cadastro by its CPF
exports.delete = (req, res) => {
    const cpf = req.params.cpf;
    Cliente.findOne({ cpf }, function (err, cliente) {
        if (err) return res.status(500).send(err)

        if (!cliente) return res.status(200).send({
            mensagem: `Infelizmente não localizamos o cpf: ${cpf}`
        });
        cliente.remove(function (err) {
            if (!err) {
                return res.status(200).send({ mensagem: 'Cadastro removido com sucesso!' })
            }
        })
    })
}