Nesse projeto foi usado o VITE
-   É uma aplicação mais leve que o app do React padrão
    -   npm create vite@latest nomeApp --template react 
    ou yarn
-   npm install (para instalar a pasta node)
-   npm run dev

Dicas:
-   apagar todos os arquivos que não estão sendo usados
-   dentro da pasta src, criar uma pasta com o nome pages
-   criar dentro da pasta pages, uma pasta para cada página do projeto
-   a página do projeto, colocar o nome de index (puxa automaticamente)
-   trocar o nome do app para home, para organizar de forma que se entenda o código
-   criar uma pasta styles, dentro da pasta src (criar arquivo css global para resetar as configs)
-   fazer o export direto na função. (No main, tem que colocar a função entre chaves pra importar corretamente)
-   o react é baseado em componentização, ou seja, são feitos componentes que podem ser reaproveitados 
    durante o desenvolvimento da aplicação em vários lugares (pasta components)

Regra (Fragment) - JSX
-   O JSX não aceita mais de um elemento dentro da função, por isso existe o fragment, que é
    embrulhar todo o código dentro de um tag de abertura e fechamento
-   <> abertura
    Código HTML
-   </> fechamento

##   Porém o mais indicado é que se embrulhe o código HTML dentro de uma DIV

## Hooks
-   Permitem usar o estado sem escrever uma classe
-   Para user os hooks é necessário usar o use antes (useState, useEffect)