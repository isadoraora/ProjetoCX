define({ "api": [
  {
    "type": "get",
    "url": "/analista",
    "title": "Retorna todos",
    "group": "Analista",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Pesquisa realizada com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/analistaRoute.js",
    "groupTitle": "Analista",
    "name": "GetAnalista"
  },
  {
    "type": "get",
    "url": "/analista/:user",
    "title": "Get user login",
    "group": "Analista",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":user",
            "optional": false,
            "field": "Users.",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Pesquisa realizada com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 USER_NOT_FOUND\n{\n   \"status\": 400,\n   \"message\": \"Error: Analista não localizado!\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/analistaRoute.js",
    "groupTitle": "Analista",
    "name": "GetAnalistaUser"
  },
  {
    "type": "post",
    "url": "/analista/login",
    "title": "",
    "group": "Analista",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Login com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 USER_NOT_FOUND\n{\n   \"status\": 400,\n   \"message\": \"Error: Analista não localizado\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/analistaRoute.js",
    "groupTitle": "Analista",
    "name": "PostAnalistaLogin"
  },
  {
    "type": "post",
    "url": "/analista/signup",
    "title": "",
    "group": "Analista",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Signup com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 DUPLICATE_EMAIL\n{\n   \"status\": 400,\n   \"message\": \"Error: Este email já está sendo utilizado\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/analistaRoute.js",
    "groupTitle": "Analista",
    "name": "PostAnalistaSignup"
  },
  {
    "type": "put",
    "url": "/analista/:id",
    "title": "Update user info",
    "group": "Analista",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Analista atualizado com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 ID_INVALID\n{\n   \"status\": 400,\n   \"message\": \"Error: ID inválido!\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/analistaRoute.js",
    "groupTitle": "Analista",
    "name": "PutAnalistaId"
  },
  {
    "type": "delete",
    "url": "/analista/:id",
    "title": "Delete analist information",
    "name": "deteleAnalist",
    "group": "Analista",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": 200,\n    \"message\": \"Analista deletado!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IdNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"ID inválido\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/analistaRoute.js",
    "groupTitle": "Analista"
  },
  {
    "type": "delete",
    "url": "/cliente/:id",
    "title": "Delete client info",
    "group": "Cliente",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "id",
            "description": "<p>Client unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Cliente deletado!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 ID_INVALID\n{\n   \"status\": 400,\n   \"message\": \"Error: ID inválido!\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clienteRoute.js",
    "groupTitle": "Cliente",
    "name": "DeleteClienteId"
  },
  {
    "type": "get",
    "url": "/analista/:id",
    "title": "Get client id",
    "group": "Cliente",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "id",
            "description": "<p>Client unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Pesquisa realizada com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 CLIENT_NOT_FOUND\n{\n   \"status\": 400,\n   \"message\": \"Error: Cliente não localizado!\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clienteRoute.js",
    "groupTitle": "Cliente",
    "name": "GetAnalistaId"
  },
  {
    "type": "get",
    "url": "/cliente",
    "title": "Retorna todos",
    "group": "Cliente",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Pesquisa realizada com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clienteRoute.js",
    "groupTitle": "Cliente",
    "name": "GetCliente"
  },
  {
    "type": "post",
    "url": "/cliente/login",
    "title": "",
    "group": "Cliente",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Login com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 CLIENT_NOT_FOUND\n{\n   \"status\": 400,\n   \"message\": \"Error: Cliente não localizado\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clienteRoute.js",
    "groupTitle": "Cliente",
    "name": "PostClienteLogin"
  },
  {
    "type": "post",
    "url": "/cliente/signup",
    "title": "",
    "group": "Cliente",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Signup com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 DUPLICATE_EMAIL\n{\n   \"status\": 400,\n   \"message\": \"Error: Este email já está sendo utilizado\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clienteRoute.js",
    "groupTitle": "Cliente",
    "name": "PostClienteSignup"
  },
  {
    "type": "put",
    "url": "/cliente/:id",
    "title": "Update client info",
    "group": "Cliente",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":id",
            "optional": false,
            "field": "id",
            "description": "<p>Client unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Cliente atualizado com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 ID_INVALID\n{\n   \"status\": 400,\n   \"message\": \"Error: ID inválido!\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clienteRoute.js",
    "groupTitle": "Cliente",
    "name": "PutClienteId"
  },
  {
    "type": "get",
    "url": "/pesquisa/notas",
    "title": "Get notas from analists",
    "group": "Pesquisa",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Pesquisa realizada com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 DUPLICATE_EMAIL\n{\n   \"status\": 400,\n   \"message\": \"Campos inválidos!\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/pesquisaRoute.js",
    "groupTitle": "Pesquisa",
    "name": "GetPesquisaNotas"
  },
  {
    "type": "get",
    "url": "/pesquisa/:quemTeAtendeu",
    "title": "Get pesquisas from that analist",
    "group": "Pesquisa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":quemTeAtendeu",
            "optional": false,
            "field": "user",
            "description": "<p>being evaluated</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Atendente localizado com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 DUPLICATE_EMAIL\n{\n   \"status\": 400,\n   \"message\": \"Campos inválidos!\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/pesquisaRoute.js",
    "groupTitle": "Pesquisa",
    "name": "GetPesquisaQuemteatendeu"
  },
  {
    "type": "get",
    "url": "/pesquisa/:quemTeAtendeu/nota",
    "title": "Get media from analists",
    "group": "Pesquisa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": ":quemTeAtendeu",
            "optional": false,
            "field": "user",
            "description": "<p>being evaluated</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Pesquisa realizada com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 DUPLICATE_EMAIL\n{\n   \"status\": 400,\n   \"message\": \"Campos inválidos!\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/pesquisaRoute.js",
    "groupTitle": "Pesquisa",
    "name": "GetPesquisaQuemteatendeuNota"
  },
  {
    "type": "post",
    "url": "/pesquisa",
    "title": "Create pesquisa from client",
    "group": "Pesquisa",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Pesquisa criada com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 DUPLICATE_EMAIL\n{\n   \"status\": 400,\n   \"message\": \"Campos inválidos!\",\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/pesquisaRoute.js",
    "groupTitle": "Pesquisa",
    "name": "PostPesquisa"
  }
] });