# API Vida Consciente
## 📋 Sobre o projeto
Este projeto foi desenvolvido no Módulo 5 do programa [Programadores do Amanhã](https://programadoresdoamanha.org/),
pela Squad 1, composta por Alexsandro Filho, Ana Carolina Neves, Brenda Machado, Elzo Íthallo, Hewel Vieira, Jamyle Elen, Joicy Kelly e Rodrigo Átila. O projeto aplica os conhecimentos adquiridos no Módulo 4 sobre APIs REST, com o objetivo de fornecer uma 
plataforma educativa e acessível que promova a saúde e o conhecimento sobre infecções sexualmente transmissíveis (DSTs/ISTs).

Este repositório contém o back-end da API Vida Consciente, responsável por gerenciar dados e fornecer as funcionalidades essenciais da aplicação. O front-end do projeto, desenvolvido paralelamente, 
pode ser acessado no seguinte repositório: [Vida Consciente - Front-end](https://github.com/brenddamachado/VidaConsciente).

## 🚫 Problematização
As infecções sexualmente transmissíveis continuam sendo um desafio de saúde pública, em grande parte devido à falta de conhecimento e conscientização da população. Muitas pessoas não têm acesso facilitado 
a informações confiáveis sobre prevenção e cuidados, o que contribui não apenas para a disseminação dessas doenças, mas também para a propagação de informações falsas e mitos sobre o tema. Essa desinformação 
pode gerar comportamentos de risco, atrasar diagnósticos e prejudicar o tratamento adequado.

## 💡 Solução
A API Vida Consciente propõe uma solução educativa e acessível, centralizando informações sobre DSTs/ISTs de forma prática e clara. Através de operações CRUD (Create, Read, Update, Delete), a API oferece dados sobre sintomas, 
tratamentos, prevenção, os tipos e os casos de DSTs/ISTs e entre outras informações que pode ajudar na conscientização e promoção da saúde.

## 🚀 Tecnologias Utilizadas
 - Node.js
 - Express
 - JavaScript
 - CORS
 - UUIDv4
 - Nodemon

## 📜 Algumas informações importantes para melhor entendimento

- O que é API?
  
    API é Interface de Programação de Aplicações. Utilizando a analogia do garçom, API leva pedidos de um aplicativo a um serviço e traz as respostas de volta. Ela facilita a comunicação entre diferentes sistemas, permitindo que eles troquem informações sem precisar saber exatamente como funcionam por dentro.

- O que é API's REST?
  
    APIs REST (Representational State Transfer) são um tipo específico de API que segue um conjunto de princípios e regras para a troca de informações entre sistemas.

- Métodos HTTP
    - GET: Recuperar dados de um servidor.
    - POST:  Enviar dados para o servidor para criar um novo recurso.
    - PATCH: Atualizar parcialmente(modificação de apenas dado) um recurso existente
    - PUT: Atualizar completamente(modifica mais de um dado) um recurso existente no servidor.
    - DELETE: Remover um recurso do servidor.

- Status de resposta HTTP
    - 1xx - Informativo
    - 2xx - Sucesso
    - 3xx - Redirecionamento
    - 4xx - Erro do Cliente
    - 5xx - Erro do Servidor

- O que é DST/ISTs?
  
    DSTs (Doenças Sexualmente Transmissíveis) ou ISTs (Infecções Sexualmente Transmissíveis) são doenças ou infecções que são transmitidas principalmente por meio do contato sexual sem proteção, seja vaginal, anal ou oral. Elas podem ser causadas por bactérias, vírus, fungos ou parasitas. O termo "IST" é mais recente e vem sendo usado com mais frequência, pois destaca que uma pessoa pode estar infectada e transmitir a doença mesmo sem apresentar sintomas aparentes.

    Entre as DSTs/ISTs mais comuns estão: HIV/AIDS, sífilis, gonorreia, clamídia, herpes genital, HPV e tricomoníase. A prevenção dessas doenças é feita principalmente com o uso de preservativos e pela educação sobre práticas sexuais seguras.

## ⚙ Funcionalidades
O desenvolvimento da API Vida Consciente foi dividido em quatro APIs principais, cada uma responsável por uma área específica da aplicação. Todas as APIs seguem o padrão de operações CRUD (Create, Read, Update, Delete), permitindo o gerenciamento completo dos dados relacionados.

### 1. API de Usuário
Esta API será responsável pelo gerenciamento dos dados de perfil. 

- **Cadastrar Usuários**: Permite a criação de novos usuários.
- **Buscar usuário**: Permite a busca dos usuários para melhor gestão.
- **Atualizar perfil**: Edição de informações dos dados pessoais.
- **Excluir Conta**: Remoção de usuários da plataforma.

#### Rotas sobre usuário - user.routes.js
| Método | Rota                                | Função                                            |
| ------ | ----------------------------------- | ------------------------------------------------- |
| POST   | /createUser                         | Operação de cadastro de usuário                   |
| GET    | /getAllUsers                        | Operação de buscar todos os usuários registrados  |
| GET    | /getUser/:id                        | Operação de busca de usuário por id               |
| PUT    | /updateUser/:id                     | Operação de atualizar os dados por id             |
| DELETE | /deleteUser/:id                     | Operação de deletar usuário via id                |

### 2. API de Conscientização sobre DSTs/ISTs
O site terá uma página dedicada a fornecer informações sobre diferentes tipos de DSTs/ISTs, mostrando os sintomas, métodos de prevenção e possíveis tratamentos. Isso ajudará a educar os usuários sobre o tema, desmistificando conceitos e incentivando a prevenção. 

- **Listar as DSTs/ISTs** - Lista as DSTs/ISTs cadastrado no sistema.
- **Adicionar informações sobre novas doenças** - O usuário adm irá adicionar o tipo, nome, método de prevenção e tratamento.
- **Buscar por nome da doença** - Facilita a busca do usuário ao querer informações de um tipo especifico de DSTs/ISTs.
- **Editar informações existentes** - Editar a lista de doenças disponíveis.
- **Excluir doenças** -  Excluir por meio da busca do id da doença.

#### Rotas sobre informações da DSTs - disease.routes.js
| Método | Rota                                | Função                                            |
| ------ | ----------------------------------- | ------------------------------------------------- |
| POST   | /newDisease                         | Operação de cadastro de informação sobre DST      |
| GET    | /searchAll                          | Operação de buscar todos as informações           |
| GET    | /searchName/:name                   | Operação de busca de informação por nome da DST   |
| PUT    | /updateInfDisease/:id               | Operação de atualizar as informações              |
| DELETE | /deleteDisease/:id                  | Operação de deletar informação via id             |

### 3. API de Mapeamento de locais de testagem e tratamento
Essa API permitirá que os usuários encontrem clínicas e laboratórios especializados perto de onde estão.

- **Adicionar novos locais de testagem ou tratamento** - Ampliação de locais para testagem e tratamento, facilitando o acesso das pessoas.
- **Exibir informações do local** - Exibir locais disponíveis com detalhes como endereço e horários de funcionamento.
- **Atualizar informações** - Manter os dados atualizados dos locais.
- **Remover local** - Excluir locais que não estão mais disponíveis 

#### Rotas sobre local de testagem e tratamento - local.routes.js
| Método | Rota                                | Função                                            |
| ------ | ----------------------------------- | ------------------------------------------------- |
| POST   | /locations                          | Operação de cadastro de localidade                |
| GET    | /locations                          | Operação de buscar todos os locais registrados    |
| PUT    | /locations/:id                      | Operação de atualizar os dados por id             |
| DELETE | /locations/:id                      | Operação de deletar localidade via id             |

### 4. API de Casos de DSTs
Essa API permitirá o gerenciamento de dados de casos de DSTs por ano.

- **Criar novo registro de casos** - Permitir que o administrador adicione novos registros de casos para um determinado ano e tipo de doença.
- **Consultar casos** - Exibir os dados dos casos de DSTs por ano.
- **Atualizar informações do caso** - Permitir a atualização dos dados de um registro específico, como corrigir o número de casos ou alterar o ano de referência.
- **Excluir registros de casos** - Exclusão de registro de caso, se for necessário.

#### Rotas sobre casos de DSTs - case.routes.js
| Método | Rota                                | Função                                            |
| ------ | ----------------------------------- | ------------------------------------------------- |
| POST   | /newCase                            | Operação de cadastro de casos                     |
| GET    | /searchAllCases                     | Operação de buscar todos os casos registrados     |
| PUT    | /updateCase/:id                     | Operação de atualizar os dados por id             |
| DELETE | /eraseCase/:id                      | Operação de deletar caso via id                   |

## ▶ Como rodar
Para clonar e rodar este projeto, você precisará do Git e do Node.js instalados em sua máquina.
- Abra o terminal
- Clone o repositório:
  ```
     git clone https://github.com/brenddamachado/VidaConsciente_Back.git
  ```
- Acesse a pasta do projeto:
     ```
  cd VidaConsciente_Back
     ```
- Faça a instalação das dependências:
    ```
  npm i
    ```
- Para compilar:
    ```
  npm run dev
    ```
  Se não quiser clonar o repositório pode baixar o zip do projeto, pelo botão code você verá o ``` Downloand ZIP ```, é só clicar que já irá baixar na sua máquina.

## 🧪 Testes
Os testes podem ser feitos de duas formas:
- Manualmente utilizando ferramentas como o [Postman](https://www.postman.com/downloads/) ou [Insomnia](https://insomnia.rest/download), para testar as funcionalidades das rotas listadas anteriormente.
- Via deploy

Segue abaixo imagem de alguns testes:
<div align = "center"> 
  <h3>Busca todas as informações sobre DST (get)</h3>
  <img src = "https://drive.google.com/uc?export=view&id=15cj7kxH2jdgajmkyZ6N8xJ0wRwVqqYvL"  width = "600px">
 
  <h3>Busca por nome da doença (get)</h3>
  <img src = "https://drive.google.com/uc?export=view&id=1HBryHhct9b0fMB_dK3JJSbdgGeZZkwJ7" width = "600px">

<h3>Busca por todos os usuários (get)</h3>
  <img src = "https://drive.google.com/uc?export=view&id=1mnidQdrJxe6SF0DQZVerKjsYQ7NXWn7b" width = "600px">
  <p>Observa que na busca apareceu "Nenhum usuário cadastrado", pois não foi inserido os dados no banco de dados mocado nessa api, então terá que ser feito o cadastramento antes de buscar</p>
  
<h3>Cadastro de usuários (post)</h3>
  <img src = "https://drive.google.com/uc?export=view&id=1oSVHgFjKO_jfZ1a4PWON_iaqM8yQPiP6" width = "600px">
  <p>Agora há usuário para a realização da busca, segue a estrutura de exemplo para o post:</p>
</div>

 ```
   {
    "name": "Lucas Oliveira",
    "email": "lucas.oliveira@example.com",
    "password": "SenhaForte123",
    "age": 28,
    "gender": "Masculino",
    "sexualOrientation": "Heterossexual",
    "medicalHistory": "Nenhuma condição pré-existente"
  }
   ```
 <p>Para inserir a estrutura tem que escolher o método POST, ir em body e escolher a estrutura Json, que é a estrutura acima.</p>

## Conclusão

O projeto Vida Consciente foi desenvolvido com o objetivo de oferecer uma plataforma educativa e acessível, promovendo a conscientização e o autocuidado em relação às infecções sexualmente transmissíveis (DSTs/ISTs). Através das funcionalidades CRUD implementadas nas quatro APIs principais, os usuários podem gerenciar informações pessoais, acessar dados sobre DSTs, localizar centros de testagem e tratamento, além de visualizar casos registrados. Esse projeto tem um papel fundamental ao tornar informações confiáveis mais acessíveis, contribuindo para a educação e a prevenção dessas doenças.

Uma melhoria significativa para o futuro desenvolvimento do projeto seria a implementação de um banco de dados real para armazenar as informações, substituindo os dados atualmente mocados. Isso permitiria maior escalabilidade, segurança e flexibilidade na gestão dos dados, além de proporcionar uma experiência mais robusta para os usuários da plataforma.

## 💻 Colaboradores
- [Brenda Machado](https://github.com/brenddamachado)
- [Elzo íthalo](https://github.com/ithalloelzo)
- [Hewel Vieira](https://github.com/hewelbelmonte)
- [Joicy Kelly](https://github.com/Joicylara)
- [Rodrigo Átila](https://github.com/Rodrigoatila09)
