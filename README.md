## Informações sobre o Projeto

Este é um projeto para seleção da AppMaster, para mais informações da empresa acessar esse [link](https://www.appmasters.io/) ou por aqui https://www.appmasters.io/.

O Objetivo deste projeto é criar uma API em GraphQL de Super Herois.

## Informações Tecnicas

O projeto é feito em node.js, utiliza as bibliotecas: Typescript, Apollo-Server, GraphQL, Axios, Dotenv e Ts-node.

Para os dados dos Super Herois foram pegos da seguinte api publica: https://github.com/akabab/superhero-api/tree/master/api

O Projeto está online por está url: https://appmastergraphql.herokuapp.com/.

Para que você possa usufruir da api é somente fazer requisições diretamente na url: https://appmastergraphql.herokuapp.com/graphql

Utilizando o metodo POST e passando JSON no corpo da requisição com as seguintes funções disponivels:

-  listHeroes() -> Recebe parâmentros: limit (Tipo INT) e order (Tipo String)
-  searchHeroes() -> Recebe parâmetros: query (Tipo String) e filter (Tipo String)
-  createHero() -> Recebe Parâmentos: data (Tipo Objeto)

Os parâmentos:

- limit -> A quantidade maxima de pedidos que vai ser retornados.
- order -> A ordernação da consulta, aceitamente somente os subelementos dos array de retorno de name, appearance, biography, work e connections.
- query -> Pesquisa qualquer coisa na api.
- filter -> filtra o que enviar no query, aceitamente somente: name, appearance, biography, work e connections.
- data -> Um Objeto para inserir as informações do novo super heroi, o unico paramêtro obrigatorio é name.
