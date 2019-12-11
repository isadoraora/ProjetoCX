module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    pesquisaMessage: {
        PESQUISA_CREATED: 'Pesquisa criada com sucesso!',
        PESQUISA_FETCHED: 'Pesquisa realizada com sucesso!',
        PESQUISA_UPDATED: 'Pesquisa atualizada com Sucesso!',
        PESQUISA_DELETED: 'Pesquisa deletada com sucesso!',
        PESQUISA_NOT_FOUND: 'Pesquisa não encontrada!',
    },
    clienteAnalistaMessage: {
        SIGNUP_SUCCESS: 'Signup com sucesso!',
        LOGIN_SUCCESS : 'Login com sucesso!',
        CLIENTE_FETCHED : 'Pesquisa realizada com sucesso!',
        DUPLICATE_EMAIL: 'Este email já está sendo utilizado',
        USER_NOT_FOUND: 'Usuário não localizado!',
        INVALID_PASSWORD: 'Senha incorreta!'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Campos inválidos.',
        TOKEN_MISSING: 'Faltando token no header.'
    },
    databaseMessage: {
        INVALID_ID: 'ID Inválido.'
    }
}