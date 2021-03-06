module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    pesquisaMessage: {
        PESQUISA_CREATED: 'Pesquisa criada com sucesso!',
        PESQUISA_FETCHED: 'Pesquisa realizada com sucesso!',
        PESQUISA_NOT_FOUND: 'Pesquisa não encontrada!',
    },
    clienteAnalistaMessage: {
        SIGNUP_SUCCESS: 'Signup com sucesso!',
        LOGIN_SUCCESS : 'Login com sucesso!',
        CLIENTE_FETCHED : 'Pesquisa realizada com sucesso!',
        DUPLICATE_EMAIL: 'Este email já está sendo utilizado',
        USER_NOT_FOUND: 'Analista não localizado!',
        USER_FOUND: 'Analista localizado com sucesso!',
        USER_UPDATED: 'Analista atualizado com sucesso!',
        USER_DELETED: 'Analista deletado!',
        CLIENT_UPDATED : 'Cliente atualizado!',
        CLIENT_NOT_UPDATED : 'Cliente não atualizado, tente novamente!',
        CLIENT_DELETED: 'Cliente deletado!',
        CLIENT_NOT_FOUND: 'Cliente não localizado!',
        INVALID_PASSWORD: 'Senha incorreta!',
        INVALID_EMAIL : 'Email não registrado!'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Campos inválidos.',
        TOKEN_MISSING: 'Faltando token no header.'
    },
    databaseMessage: {
        INVALID_ID: 'ID Inválido.'
    }
}