const Analista = require('../database/models/analistaModel');
const constants = require('../constants');
const analistaService = require('../service/analistaService');

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

//creating and saving new Analist
// exports.create = (req, res, next) => {
//     const analista = new Analista(req.body)
//     analista.save()
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

//Returning all analists cadastros
exports.findAll = (req, res, next) => {
    Analista.find()
        .then(analista => {
            res.send(analista)
        }).catch(err => {
            res.status(500).send({
                mensagem: err.mensagem || 'Ocorreu um erro no carregamento dos cadastros.'
            })
        })
};

//Finding a single cadastro by USER
exports.getUser = (req, res, next) => {
    Analista.find({ "user": req.params.user }, (err, analista) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(analista);

    })
};

//Update cadastro por USER, validating request
exports.update = (req, res, next) => {
    if (!req.body.user) {
        return res.status(400).send({
            mensagem: 'Campos do cadastro não podem estar em branco.'
        })
    }
}

//Updating Cadastro
exports.update = (req, res) => {
    Analista.updateOne(
        { user: req.params.user },
        { $set: req.body },
        { upsert: false }
    )
        .then(() => {
            return res.status(200).send({ mensagem: 'Cadastro atualizado com sucesso.' })
        }).catch((err) => {
            return res.status(400).send({ mensagem: err })
        })
};

//Deleting cadastro by its USER
exports.delete = (req, res) => {
    const user = req.params.user;
    Analista.findOne({ user }, function (err, analista) {
        if (err) return res.status(500).send(err)

        if (!analista) return res.status(200).send({
            mensagem: `Infelizmente não localizamos o user: ${user}`
        });
        analista.remove(function (err) {
            if (!err) {
                return res.status(200).send({ mensagem: 'Cadastro removido com sucesso!' })
            }
        })
    })
}

