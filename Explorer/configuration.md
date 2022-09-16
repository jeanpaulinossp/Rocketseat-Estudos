
# REACT

-   Primeiro passo em qualquer projeto => (criar o package.json)
    > npm init -y ou yarn init -y

-   Iniciar um projeto react
    > npm add react
    > npm add react-dom
    > npm add @babel/core @babel/cli @babel/preset-env -D (O -D significa que é para Desevolvimento)
    > npm add @babel/preset-react -D (sem essa bibilioteca o babel não consegue converter react)
    > npm add webpack webpack-cli webpack-dev-server -D (permite a importação de vários arquivos dentro do react)
    > npm add babel-loader -D (integra o babel e o webpack)
    > npm add html-webpack-plugin -D (faz o webpack reconhecer o html sem a necessidade de referenciar no index.html)
    > npm add webpack-dev-server -D (Atualiza automaticamente sem a necessidade de ficar atualizando o proj manualmente)
    > NODE_ENV=production yarn webpack (cria uma variavel de produção) => LINUX OU MAC
        >> Windows npm add cross-env -D
        >> No package.json criar um script
        "dev": "webpack serve", => modo desenvolvimento
        "build": "cross-end NODE_ENV=production webpack" => modo de produção
    > npm add style-loader css-loader -D (Usados para conseguir importar e ler os arquivos css)
    > npm add sass -D
    > npm add sass-loader -D (é uma biblioteca que auxilia no processamento dos arquivos CSS, trazendo novas func..)
    > npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh(biblioteca para manter o estado atual da aplicação
    >> npm install -D react-refresh-typescript (a aplicação de cima depende dessa)
    >> mesmo após atualizar algum componente, não resetando toda hora o estado)
    > npm add typescript -D
    >> yarn typescript --init
    >>> copiar as configurações do arquivo tsconfig dessa aplicação
    > npm add @babel/preset-typescript -D
    >> caso der erro ao alterar o index para index.tsx, instalar:
    >>> npm add @types/react-dom -D
    >>> npm add @types/react -D
-   Estrutura do Projeto
    > Criar pasta src
        => babel.config.js
        => webpack.config.js (no modo dev, colocar mode: 'development'. Após terminar a aplicação, tirar)
    > Criar pasta public (arquivos que vão ser acessados externamente)
        => index.html

-   Convertendo arquivo JS para Babel
    > yarn babel src/index.jsx --out-file dist/bunble.js
        => puxando o arquivo em JS e criando uma nova pasta e novo arquivo com o código convertido em Babel

-   Convertendo com o Webpack (Usar esse em vez do babel)
    > yarn webpack (converte o projeto para o formato js no arquivo bundle, que foi pre-config no config do webpack)

-   Passos importantes
    > No arquivo index.html, criar a div root
    > No index.js importar o render do react-dom e puxar ele
    > Para executar a aplicação com o servidor >> yarn webpack server
