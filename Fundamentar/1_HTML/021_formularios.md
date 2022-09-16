# Formulários

-   <fieldset>
    -   agrupamento de campos
    -   mesmo propósito
    -   semântico
    -   acessibilidade

-   Atributos especiais
    -   disable (desabilita todos os elementos internos e não será enviado ao submeter o formulário)
    -   form (o id de um formulário ao qual esse fieldset pertence, não precisa estar dentro do form)
    -   name (nome do grupo)

-   <legend>
    -   nome do agrupamento e é o primeiro elemento dentro do fieldset
*-----------------------------------------------------------------------------------------------------------------*

# Label

-   <label>
    -   associar e identificar uma ou mais tag de entrada de dados
    -   acessibilidade
    -   você poderá clicar para mudar o foco da entrada de dados

*   Atributos
    -   for (para fazer a conexão entre este label e a tag de entrada de dados. É feito via id do input e só funciona
    em elementos button, input, meter, output, progress, select e textarea)
*-----------------------------------------------------------------------------------------------------------------*

# Button

-   <button>
    -   Representa um botão, é usado para enviar formulários e é estilizado pelo user agent
    -   Atributos comuns:
        *   type (submit, reset, button)
        *   autofocus
        *   disabled
        *   name
        *   value
        *   form
*-----------------------------------------------------------------------------------------------------------------*

# Datalist

-   <datalist>
    -   Lista de valores como sugestão a uma tag <input>
    -   Valores sugestivos e não obrigatórios
    -   Usuário poderá selecionar um dos valores, ou colocar um valor diferente da sugestão
*-----------------------------------------------------------------------------------------------------------------*

# Input

-   <input>
    -   Um dos mais usados em formulários
    -   Aceita os mais diversos tipos de dados
    -   Um dos mais poderosos e complexos
    -   Elevado número de combinações
*   Atributos
    -   type (text, date, color, number, email, file, password, )
    -   name
    -   id
*   Atributos comuns
    -   autocomplete (usado para que o navegador sugira email ou algo já usado no navegador do usuário)
    -   autofocus (vai focar na tag selecionada)
    -   disable (desabilita e pode ser usado com uma regra JS)
    -   value (pode deixar um valor ja pré-colocado)
    -   readonly (funciona como o disable)
    -   form (link o input com um formulário)
    -   name (serve também para linkar com o backend)
    -   required (não deixa clicar o botão sem que a pessoa preencha)
    -   placeholder (password, search, tel, text, url => deixa um texto na caixa)

## Password / Email / url

*   Atributos
    *   minlenght / maxlenght (Número mínimo ou máximo de caracteres para esse campo)
    *   size (Número aceitável de caracteres que esse campo deverá conter)
    *   pattern 
        - Expressão regular para validar o que está sendo digitado no campo
        - Altamente recomendado o uso de um padrão de segurança alta de senhas
        - Exemplo: A senha deve conter caracteres hexadecimais com o limite de no minimo 4 e no máximo 8 caracteres
        * password pattern ="[0-9a-fA-F]{4,8}"
        * email pattern =".+@rocketseat\.com\.br" Só aceita email da rocketseat
        * url pattern =".*\.com\.br.*"
        * inputmode ="numeric" (poderá alterar o uso do teclado em smartphones)
        * url spellcheck ="true" habilita a correção ortográfica

## Files
*   Atributos
    *   accept="image/*, png, jpeg, audio, video" (arquivos que podem ser anexados)
    *   multiple (deixa que vários arquivos sejam enviados simultaneamente)

## Color
*   Atributos
    *   value: RGB
    *   id

## Checkbox
*   Atributos globais

## Hidden
*   Invisivel ao usuário, pode ser usado para coletar alguma informação por exemplo da hora que o site foi acessado ou que o form foi enviado.
    -   Ex: <input type="hidden" id="timestamp" name="timestamp">

## Radio
*   Atributos globais
    -   Funciona como um option, porém só permite selecionar uma opção.

## Textarea
*   Atributos
    -   id
    -   name
    -   rows e cols
    -   maxlenght e minleght
    -   wrap
    -   autocomplete, autofocus, disable, placegolder, reandonly, form, required

## Select
*   Atributos
    -   value
    -   multiple
    -   size

## Optgroup
*   Faz um agrupamento dos options

## Search
*   Atributos
    -   list / datalist
    -   pattern
    -   arial-label => para acessibilidade

## Number
*   Atributos
    -   min, max
    -   step

## Range
*   Atribos são o mesmo que o Number

## Data e hora (date)
*   date, datetime-local, time, week