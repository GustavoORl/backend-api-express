Tópicos Importantes
Qual linguagem de programação utilizada para o nosso Backend? JavaScript

O que é o Node.js? é o ambiente que roda o JavaScript

O que é NPM? NPM (Node Package Manager) = É basicamente o gerenciador de pacotes do Node.js, ele permite adicionar e remover pacotes do projeto

O que é o express.js? É um framework não opinativo, deixando livre para usar a estrutura dele no projeto e construir APIs.

O que é uma API (Application Programming Interface)? uma interface para o nosso front-end se comunicar com o back-end

Framework: Conjunto de recursos ou ferramentas para facilitar e agilizar o desenvolvimento de aplicações.

Como mudar o formato de importação de "require" (padrão comonjs) para "module": é na opção "type" no package.json

O que é HTTP? é o protocolo base da World Wide Web, operando como um sistema de requisição-resposta entre um cliente (front) e um servidor(back).

Quais os metodos de requisição HTTP e para que serve cada um deles? -- GET(PEGAR): É o método mais comum. Você o usa toda vez que digita uma URL no navegador ou clica em um link. -- POST(POSTAR): Usado para inserir dados novos para o servidor para que ele crie um novo registro. -- PUT(EDITAR): É o comando de "edição completa", para alterar um dado que ja estao na base de dados. -- PATCH: Diferente do PUT, o PATCH é "cirúrgico", faz uma edição parcial dos dados. -- DELETE: O nome já diz tudo: é o comando para apagar alguma coisa do banco.

"res": É o que o express me da para responder o usuario

"req": Guarda as informações que chegam da requisição

"app.get": ROTAS DA API - SÃO ENDEREÇOS QUE VAO FICAR ESCUTANDO OS METODOS

"app.listen": Escutando as requisições para subir o servidor

"node -v": Versão do node

"npm -v": Versao do NPM

"npm init": Inicializa o projeto criando o package.json

"Start": É o único script que não precisa do comando run Todo script precisa do comando run

"--watch": Um comando para monitorar/observar alguma coisa em tempo real para parar o watch de rodar no terminal da o Ctrl + C

"echo": É um comando de terminal, tipo console.log

comando "npm install ou npm i" permite instalar pacotes

"node_modules": São os arquivos de outros pacotes necessários para a instalação do pacote principal

"Package-lock.json": Versão de todos os pacotes que foram instalados através de algum pacote principal

"Package.json": Funciona como a carteira de identidade do projeto

"uninstall": Comando para desinstalar um pacote

Para que serve o ROUTER do express? Para separar um conjunto de rotas em um arquivo separado com rotas do mesmo end-point

Web Design = Projeto do Site

Padrão de projetos: MVC (Model-View-Controller) - separar a organizacao das responsabilidades do projeto em 3 camadas MODEL - regra de negocios, acesso a base de dados VIEW - fluxo da aplicação, camada de representação, front-end CONTROLLER - Controle do fluxo de aplicação (entrada, processamento(lógica) e saida), ele cuida da resposta

O que é um ORM (Object-Relational-Mapping)? é uma tecnica de desenvolvimento que traduz entre bancos de dados relacionais e lingugagens orientadas a objetos para JavaScript/node.js o mais moderno é o Prisma.

Quais as vantagens de utilizar um ORM? Trocar de banco de dados

Comandos do Prisma
Instalação: - npm i prisma -D (CLI - Comand Line Interface: comandos de terminal) - npm i dotenv -D

Comando para iniciar o prisma: - npx prisma init --datasource-provider mysql --output ../generated/prisma

Gerar o banco de dados a partir do esquema do prisma: - npx prisma db push

Gerar do esquema prisma a partir do banco de dados: - npx prisma db pull

Gerar as funções para interagir com os modelos no esquema: - npx prisma generate

    - npm install @prisma/client @prisma/adapter-mariadb mariadb
Abre as tabelas criadas: - npx prisma studio

JSON é uma String que representa um objeto do JavaScript Front - objeto javaScript Request transforma em json Backend transforma em objeto e é manipulado em JavaScript