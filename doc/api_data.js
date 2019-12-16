define({ "api": [
  {
    "type": "get",
    "url": "/analista",
    "title": "",
    "group": "Analista",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analista",
            "description": "<p>Lista de analistas cadastrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"user\": \"isadoraora\",\n        \"password\": \"$2a$12$YmDriNGLoK1Js4of9rS7ZePqh/NKFL5.yt1vljVI/zinHTFjn3LAO\",\n        \"createdAt\": \"2019-12-11T04:56:51.805Z\",\n        \"updatedAt\": \"2019-12-11T04:56:51.805Z\",\n        \"__v\": 0,\n        \"id\": \"5df077130a79c01810c59a58\"\n    }",
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
    "title": "",
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
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"status\": 200,\n    \"message\": \"Pesquisa realizada com sucesso!\",\n    \"body\": {\n        \"user\": \"isadoraora\",\n        \"password\": \"$2a$12$YmDriNGLoK1Js4of9rS7ZePqh/NKFL5.yt1vljVI/zinHTFjn3LAO\",\n        \"createdAt\": \"2019-12-11T04:56:51.805Z\",\n        \"updatedAt\": \"2019-12-11T04:56:51.805Z\",\n        \"__v\": 0,\n        \"id\": \"5df077130a79c01810c59a58\"\n    }\n}",
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
          "content": "    HTTP/1.1 200 OK\n  {\n    \"status\": 200,\n    \"message\": \"Login com sucesso!\",\n    \"body\": {\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjY3YWI4ZDM1ZDAzMmQ4MDEwMGE3YSIsImlhdCI6MTU3NjQzNDM3NywiZXhwIjoxNTc2NTIwNzc3fQ.2Fqjhls2IKDPtSG-ZxRR-4YLrUNs1aytr1qtPnNHvx4\"\n    }\n}",
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
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User do analista.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password do analista.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"status\": 200,\n    \"message\": \"Signup com sucesso!\",\n    \"body\": {\n        \"user\": \"andreO\",\n        \"password\": \"$2a$12$UtU7F7xbx7c88s0OT7G1tOx4629qg9eZf0dAtCh1N7Ox9Lue7IiMe\",\n        \"createdAt\": \"2019-12-15T18:23:32.815Z\",\n        \"updatedAt\": \"2019-12-15T18:23:32.815Z\",\n        \"__v\": 0,\n        \"id\": \"5df67a24cdf3312844a023e0\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Campos vazios\n {\n    \"status\": 400,\n    \"message\": \"Campos inválidos.\",\n    \"body\": [\n        {\n            \"error\": \"\\\"password\\\" is not allowed to be empty\",\n            \"path\": [\n                \"password\"\n            ]\n        }\n    ]\n}",
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
          "content": "    HTTP/1.1 200 OK\n   {\n    \"status\": 200,\n    \"message\": \"Analista atualizado com sucesso!\",\n    \"body\": {\n        \"user\": \"AndreO\",\n        \"password\": \"$2a$12$UtU7F7xbx7c88s0OT7G1tOx4629qg9eZf0dAtCh1N7Ox9Lue7IiMe\",\n        \"createdAt\": \"2019-12-15T18:23:32.815Z\",\n        \"updatedAt\": \"2019-12-15T18:34:52.151Z\",\n        \"__v\": 0,\n        \"id\": \"5df67a24cdf3312844a023e0\"\n    }\n}",
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
          "content": "    HTTP/1.1 200 OK\n    {\n    \"status\": 200,\n    \"message\": \"Analista deletado!\",\n    \"body\": {\n        \"user\": \"AndreO\",\n        \"password\": \"$2a$12$UtU7F7xbx7c88s0OT7G1tOx4629qg9eZf0dAtCh1N7Ox9Lue7IiMe\",\n        \"createdAt\": \"2019-12-15T18:23:32.815Z\",\n        \"updatedAt\": \"2019-12-15T18:34:52.151Z\",\n        \"__v\": 0,\n        \"id\": \"5df67a24cdf3312844a023e0\"\n    }\n}",
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
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Senha do cliente.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"status\": 200,\n    \"message\": \"Cliente deletado!\",\n    \"body\": {\n        \"email\": \"pedro@gmail.com\",\n        \"createdAt\": \"2019-12-15T18:08:18.135Z\",\n        \"updatedAt\": \"2019-12-15T18:08:18.135Z\",\n        \"__v\": 0,\n        \"id\": \"5df67692dd6532113cbb7af6\"\n    }\n}",
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
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"status\": 200,\n    \"message\": \"Pesquisa realizada com sucesso!\",\n    \"body\": {\n        \"email\": \"maedaisa@gmail.com\",\n        \"createdAt\": \"2019-12-10T18:22:36.420Z\",\n        \"updatedAt\": \"2019-12-10T18:22:36.420Z\",\n        \"__v\": 0,\n        \"id\": \"5defe26c88f2170290ebab8d\"\n    }\n}",
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
    "title": "",
    "group": "Cliente",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clientes",
            "description": "<p>Lista de clientes cadastrados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"_id\": \"5defe26c88f2170290ebab8d\",\n     \"email\": \"maedaisa@gmail.com\",\n     \"senha\": \"$2a$12$XPf.ccrEqxuTQKqi/YfCOOaE9u/XSj/s6Xp5G3BMq.vC0cd/aDxR6\",\n     \"createdAt\": \"2019-12-10T18:22:36.420Z\",\n     \"updatedAt\": \"2019-12-10T18:22:36.420Z\",\n     \"__v\": 0\n },",
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
          "content": "    HTTP/1.1 200 OK\n   {\n    \"status\": 200,\n    \"message\": \"Login com sucesso!\",\n    \"body\": {\n        \"cliente\": {\n            \"_id\": \"5df677ae7bb79d1f841dd773\",\n            \"email\": \"cthomaz@gmail.com\",\n            \"senha\": \"$2a$12$fEmL1fyA5SU7fBiCmb4Y2Om.GTuuZqkFGU.cWbTZ2SyS5OmzwgmbS\",\n            \"createdAt\": \"2019-12-15T18:13:02.502Z\",\n            \"updatedAt\": \"2019-12-15T18:13:02.502Z\",\n            \"__v\": 0\n        },\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjY3N2FlN2JiNzlkMWY4NDFkZDc3MyIsImlhdCI6MTU3NjQzMzY1MSwiZXhwIjoxNTc2NTIwMDUxfQ.TgkEXc93IyXluBaLOrVryI0o6UIXMSFL-DdZU_HVS9U\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Senha do cliente.</p>"
          }
        ]
      }
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
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Senha do cliente.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"status\": 200,\n    \"message\": \"Signup com sucesso!\",\n    \"body\": {\n        \"result\": {\n            \"_id\": \"5df6788b2e9c39173828be74\",\n            \"email\": \"teachersil@gmail.com\",\n            \"senha\": \"$2a$12$ms/IJVCK./gO7HQSGbxIL.E6wMHvUuhioRZnarYe.uXf/9GfO2lSS\",\n            \"createdAt\": \"2019-12-15T18:16:43.123Z\",\n            \"updatedAt\": \"2019-12-15T18:16:43.123Z\",\n            \"__v\": 0\n        },\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzY0MzM4MDQsImV4cCI6MTU3NjUyMDIwNH0.xd0fDwSn-FV55OBA-qEQRC375Ur8r1TLLsPAVef2Mi8\"\n    }\n}",
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
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Campo vazio\n {\n    \"status\": 400,\n    \"message\": \"Campos inválidos.\",\n    \"body\": [\n        {\n            \"error\": \"\\\"senha\\\" is not allowed to be empty\",\n            \"path\": [\n                \"senha\"\n            ]\n        }\n    ]\n}",
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
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Senha do cliente.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"status\": 200,\n    \"message\": \"Cliente atualizado!\",\n    \"body\": {\n        \"email\": \"ameixa@gmail.com\",\n        \"createdAt\": \"2019-12-15T18:09:47.716Z\",\n        \"updatedAt\": \"2019-12-15T18:20:50.126Z\",\n        \"__v\": 0,\n        \"id\": \"5df676eb7bb79d1f841dd76e\"\n    }\n}",
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
    "title": "Get media from all the analists.",
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
          "content": "HTTP/1.1 200 OK\n{\n\"status\": 200,\n\"message\": \"Pesquisa realizada com sucesso!\",\n\"body\": [\n    {\n        \"_id\": \"5df07cdd5451f923cce6499f\",\n        \"Nome\": \"João\",\n        \"Nota\": 10\n    },\n    {\n        \"_id\": \"5df07cdd5451f923cce6499f\",\n        \"Nome\": \"Andressa\",\n        \"Nota\": 9.5\n    }",
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
    "title": "Get pesquisa from an analista by 'quemTeAtendeu' params.",
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
          "content": " HTTP/1.1 200 OK\n{\n \"status\": 200,\n \"message\": \"Atendente localizado com sucesso!\",\n \"body\": [\n     {\n         \"email\": \"isadoraoliveira@gmail.com\",\n         \"senha\": \"123456\",\n         \"quemTeAtendeu\": \"João\",\n         \"notaAtendimento\": 10,\n         \"voltariaFazerNegocio\": true,\n         \"indicariaParaAmigo\": true,\n         \"createdAt\": \"2019-12-11T05:21:33.669Z\",\n         \"updatedAt\": \"2019-12-11T05:21:33.669Z\",\n         \"__v\": 0,\n         \"id\": \"5df07cdd5451f923cce6499f\"\n     }",
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
    "title": "Get media from an specific analist.",
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
          "content": "    HTTP/1.1 200 OK\n   {\n    \"status\": 200,\n    \"message\": \"Pesquisa realizada com sucesso!\",\n    \"body\": [\n        {\n            \"_id\": \"João\",\n            \"Media\": 10,\n            \"quantidadePesquisas\": 3\n        }\n    ]\n}",
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
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>Senha do cliente.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "quemTeAtendeu",
            "description": "<p>usuário do analista que realizou o atendimento.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "notaAtendimento",
            "description": "<p>Nota do atendimento.</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "voltariaFazerNegocio",
            "description": "<p>Sim ou não.</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": false,
            "field": "indicariaParaAmigo",
            "description": "<p>Sim ou não.</p>"
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
          "content": "    HTTP/1.1 200 OK\n  {\n    \"status\": 200,\n    \"message\": \"Pesquisa criada com sucesso!\",\n    \"body\": {\n        \"email\": \"teacher_sil@gmail.com\",\n        \"quemTeAtendeu\": \"Junior\",\n        \"notaAtendimento\": 8,\n        \"voltariaFazerNegocio\": true,\n        \"indicariaParaAmigo\": true,\n        \"createdAt\": \"2019-12-16T02:49:46.350Z\",\n        \"updatedAt\": \"2019-12-16T02:49:46.350Z\",\n        \"__v\": 0,\n        \"id\": \"5df6f0caa7abbf0ef8c26214\"\n    }\n}",
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
