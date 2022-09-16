# NPM (Para criar um arquivo node - package.json)

-   npm init (cria um arquivo package.json e nos pergunta as informações do arquivo)
-   npm -y (criar o arquivo pronto para que possamos preencher as informações direto no package.json)

## Instalar Módulos externos

-   npm install cfonts ou npm i cfonts (instala diversas fontes diferentes que podem ser usadas no projeto)
-   npm i cfonts -D (informa no arquivo que o pacote instalado é só pra desenvolvimento, não sendo preciso
    instalar na máquina da pessoa quando for rodar o arquivo)
-   npm update (Usar caso faça alguma alteração no arquivo package.json)
-   a pasta criada (node_modules) deve ser ignorada pelo github (criar arquivo .gitignore e escrever no arquivo
    node_modules/)
-   para instalar novamente o pacote em uma nova máquina, somente colocar npm install que o npm buscará todas as
    informações contidas no arquivo package.json e instalará.

## Configurar o package.json para dar o start

-   Dentro do arquivo package.json, na tag scripts, trocar o test por start e colocar o nome do arquivo que rodará
    o node (Ex: "start": "node index.js")
-   npm run start (para rodar a aplicação) - O comendo start não precisa ser especificado no comando, poderá ser
    executado somente com npm run, porém caso o nome seja outro, como dev, deve ser colocado npm run dev.

## Instalar as dependências globalmente

-   npm i opn -g (o -g informa que a instalação será global, portanto ela não constará dentro do projeto)
-   npm root -g (comando para saber onde a aplicação foi instalada)
-   npm uninstall opn -g (para desinstalar o pacote instalado)

## Mudar versão do pacote instalado

-   npm outdated (Mostra as informações das versões)
-   npm upgrade (Atualiza a versão para a versão mais ideal para o projeto - wanted)
    é importante observar que dentro do arquivo package.json não irá mudar a versão do arquivo, mas ele criará
    dentro do arquivo uma dependência da versão atual instalada.
    