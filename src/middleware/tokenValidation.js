const constants = require('../constants');
const jwt = require('jsonwebtoken');


//middleware intercepta a requisição entre o controller e a rota
//recebe o next pra chamar somente se o user tá pronto pra seguir no fluxo(controller)
module.exports.validateToken = (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    try {
        if (!req.headers.authorization) {
            throw new Error(constants.requestValidationMessage.TOKEN_MISSING)
        }
        const token = req.headers.authorization.split('Bearer')[1].trim(); //trim para limpar o texto no console
        const decoded = jwt.verify(token, process.env.SECRET_KEY || 'my-secret-key');
        // console.log('decoded', decoded);
        return next();
    } catch (error) {
        console.log('Error', error);
        response.message = error.message;
        response.status = 401;
    }
    return res.status(response.status).send(response);
}