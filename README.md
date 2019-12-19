### Projeto Final | Back-end | {reprograma} + Mercado Livre | Dezembro de 2019

#### Objetivo

Há algum tempo, quando ainda não sabia nada de códigos, trabalhei em uma empresa que tinha 3 canais de Customer Experience, chat, telefone e e-mail. Nos três a análise dos indicadores, inclusive do NPS, era gerado de forma manual, em uma planilha Excel. 
Ao longo do dia as coordenadoras de cada departamento gritavam as notas dos analistas de atendimento, que elas mesmo extraíam das ferramentas de telecom, e tratavam no Excel. Muitas vezes, muitas mesmo, esse número não batia e era aquela loucura. 
Além disso era desconfortável ouvir a nota de cada um deles, e as broncas que levavam na frente de todos. 
Decidi então trazer esse case real pro meu projeto final. Minha API faz cadastro de novos clientes, os autentica, e então permite que eles possam responder uma pesquisa sobre o atendimento que receberam. Há também a possibilidade de cadastrar novos analistas. O mais interessante é que conseguimos buscar a média de cada atendente, e visualizar quantas pesquisas responderam sobre ele.
Isso faz com que o próprio analista insista ao cliente que o ajude, respondendo uma breve pesquisa. 

#### Rotas/EndPoints

POST /ciente/signup Rota que realiza o registro de um novo cliente.

POST /analista/signup Rota que realiza o registro de um novo analista de atendimento.

POST /pesquisa/ Rota que cria e salva uma pesquisa, respondida apenas pelo cliente. 

POST /cliente/login Rota que realiza a validação das informações geradas no signup e então loga o cliente.

POST /analista/login Rota que realiza a validação das informações geradas no signup e então loga o analista.

GET /cliente Rota que retorna todos os clientes cadastrados no sistema.

GET /analista Rota que retorna todos os analistas cadastrados no sistema.

GET /cliente/:id Rota para retornar apenas o cliente do id passado como parâmetro na URL.

GET /analista/:user Rota para retornar apenas o analista com o user passado na URL.

GET /pesquisa/:quemTeAtendeu Rota para buscar a pesquisa de um analista passando como parâmetro: 'quemTeAtendeu'.

GET /pesquisa/:quemTeAtendeu/nota Rota para trazer a média do analista passado no parâmetro, e quantidade de pesquisas respondidas sobre atendimentos dele.

PUT /cliente/:id Rota que atualiza algum item dentro do schema do cliente.

PUT /analista/:id Rota que atualiza algum item dentro do schema do analista.

DELETE /cliente/:id Rota que deleta um item, baseada no id.

DELETE /analista/:id Rota que deleta um item, baseada no id. 

#### Suporte, Linguagens e Frameworks:

NodeJS
API REST
MongoDB Atlas
Postman
Robo 3T
GitHub
Express
Token JWT
Mongoose
Nodemon
Heroku

#### Sobre mim :)

Isadora Mendonça de Oliveira, formada em Tradução e Interpretação lá em 2010, e que em 2015 descobriu sua paixão em códigos. Cursei Análise e Desenvolvimento, mas acabei indo para a área de Business Intelligence. Neste ano resolvi migrar de fato para a área de backend. Estudante da {reprograma} e nas hora vagas estudando front-end para em um futuro próximo me tornar Desenvolvedora Fullstack. 

Caso tenha algum dúvida sobre meu projeto, ou sobre minha trajetória => isa.mdeo@gmail.com

Obrigada {reprograma} e Mercado Livre pela incrível experiência. Vocês mudaram minha vida de forma muito positiva!
