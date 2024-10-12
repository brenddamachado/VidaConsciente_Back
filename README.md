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

## ⚙ Funcionalidades
O desenvolvimento da API Vida Consciente foi dividido em quatro APIs principais, cada uma responsável por uma área específica da aplicação. Todas as APIs seguem o padrão de operações CRUD (Create, Read, Update, Delete), permitindo o gerenciamento completo dos dados relacionados.

#### 1. API de Usuário
Esta API será responsável pelo gerenciamento dos dados de perfil. 

- **Cadastrar Usuários**: Permite a criação de novos usuários.
- **Buscar usuário**: Permite a busca dos usuários para melhor gestão.
- **Atualizar perfil**: Edição de informações dos dados pessoais.
- **Excluir Conta**: Remoção de usuários da plataforma.

#### 2. API de Conscientização sobre DSTs/ISTs
O site terá uma página dedicada a fornecer informações sobre diferentes tipos de DSTs/ISTs, mostrando os sintomas, métodos de prevenção e possíveis tratamentos. Isso ajudará a educar os usuários sobre o tema, desmistificando conceitos e incentivando a prevenção. 

- **Listar as DSTs/ISTs** - Lista as DSTs/ISTs cadastrado no sistema.
- **Adicionar informações sobre novas doenças** - O usuário adm irá adicionar o tipo, nome, método de prevenção e tratamento.
- **Buscar por nome da doença** - Facilita a busca do usuário ao querer informações de um tipo especifico de DSTs/ISTs.
- **Editar informações existentes** - Editar a lista de doenças disponíveis.
- **Excluir doenças** -  Excluir por meio da busca do id da doença.

#### 3. API de Mapeamento de locais de testagem e tratamento
Essa API permitirá que os usuários encontrem clínicas e laboratórios especializados perto de onde estão.

- **Adicionar novos locais de testagem ou tratamento** - Ampliação de locais para testagem e tratamento, facilitando o acesso das pessoas.
- **Exibir informações do local** - Exibir locais disponíveis com detalhes como endereço e horários de funcionamento.
- **Atualizar informações** - Manter os dados atualizados dos locais.
- **Remover local** - Excluir locais que não estão mais disponíveis 


#### 4. API de Casos de DSTs
Essa API permitirá o gerenciamento de dados de casos de DSTs por ano.

- **Criar novo registro de casos** - Permitir que o administrador adicione novos registros de casos para um determinado ano e tipo de doença.
- **Consultar casos** - Exibir os dados dos casos de DSTs por ano.
- **Atualizar informações do caso** - Permitir a atualização dos dados de um registro específico, como corrigir o número de casos ou alterar o ano de referência.
- **Excluir registros de casos** - Exclusão de registro de caso, se for necessário.


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
  
## 💻 Colaboradores
- [Brenda Machado](https://github.com/brenddamachado)
- [Elzo íthalo](https://github.com/ithalloelzo)
- [Hewel Vieira](https://github.com/hewelbelmonte)
- [Joicy Kelly](https://github.com/Joicylara)
- [Rodrigo Átila](https://github.com/Rodrigoatila09)
