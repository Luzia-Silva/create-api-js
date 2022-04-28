![Snake animation](https://media.giphy.com/media/SElYNmZJa1Log2LZkn/giphy.gif)

## Aonde estudar:

- Rocketseat Youtube: https://youtu.be/ghTrp1x_1As
- Repository Rocketseat: https://github.com/rocketseat-content/youtube-api-rest-restful
- Alura: https://www.alura.com.br/artigos/rest-conceito-e-fundamentos
- Código Fonte: https://youtu.be/S7MduKwvVGk
- Bonieky Lacerda: https://youtu.be/3LHSyha0xN0
- Rocketseat Curso na Plataforma: https://app.rocketseat.com.br/node/trabalhando-com-apis

## Construindo Minha Primeira API

O que é uma API(Interface de programação de aplicações)?<br>
Conjunto de rotinas e padrões de porogramação para web ou aplicativo.<br>
É um mini-sisteminhas que da acesso ao backend do seu SISTEMA central.

## API, REST e RESTFUL

- CLIENTE (CLIENT)
- GARÇON (PEDIDOS - LEVAR SEUS PEDIDOS - PARA COZINHA) (API)
- COZINHA (SERVER)

Acrônimo de Application Programming Interface (Interface de Programação de Aplicações) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.
- Intermediador para troca de informações.

## REST - Representational State Transfer (Transferência Representacional de Estado)

DEFINIÇÃO:<br>
É um modelo de arquitetura que fornece diretrizes para que os sistemas distribuídos se comuniquem diretamente usando os princípios e protocolos existentes da Web. Criador Roy Fielding nos anos 2000, onde o princípio fundamental é usar o protocolo HTTP (Protocolo de comunicação) para comunicação de dados.

Responsabilidades no REST é fazer esse caminho de Client e Server para que ocorrá a comunicação de troca de mensagens usando um padrão de solicitação-resposta:
Cliente: é o componente solicitante de um serviço e envia solicitações para vários tipos de serviços ao servidor.
Servidor: É o componente que é o provedor de serviços e fornece continuamente serviços ao cliente conforme as solicitações

<b>O REST precisa que um cliente faça uma requisição para o servidor para enviar ou modificar dados.</b>

## Verbos HTTP

Em aplicação REST, os métodos mais utilizados são:

- O método GET é o método mais comum, geralmente é usado para solicitar que um servidor envie um resource;
- O método POST foi projetado para enviar dados de entrada para um resource. Na prática, é frequentemente usado para suportar formulários HTML;
- O método PUT edita e atualiza documentos em um resource;
- O método DELETE que como o próprio nome já diz, deleta certo dado ou coleção do resource.

## Códigos de status de respostas HTTP

Cada resposta que a aplicação REST retorna, é enviado um código definindo o status da requisição. Acesse abaixo todos os tipos de códigos que são retornados da sua aplicação.
<b>Developer Mozilla: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status</b>

## RESTFUL

RESTful, é a aplicação dos padrões REST.

## 6 NECESSIDADES (constraints) para ser RESTful

- _Uniform Interface_: Manter uma uniformidade, uma constância, um padrão na construção da interface. Nossa API precisa ser coerente para quem vai consumi-lá. Precisa fazer sentido para o cliente e não ser confusa. Logo, coisas como: o uso correto dos verbos HTTP; endpoints coerentes (todos os endpoints no plural, por exemplo); usar somente uma linguagem de comunicação (json) e não várias ao mesmo tempo; sempre enviar respostas aos clientes; são exemplos de aplicação de uma interface uniforme.

- _Client-server_: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações.

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela resquição, pode ou não ser cacheada pelo cliente.

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.

## BOAS PRÁTICAS

- Utilizar verbos HTTP para nossas requisições.
- Utilizar plural ou singular na criação dos endpoints(terminais)? _NÃO IMPORTA!_ use um padrão!!
- Não deixar barra no final do endpoint
- Nunca deixe o cliente sem resposta!
