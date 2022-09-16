# Selectors
Conecta um elemento HTML com o CSS
*---------------------------------------------------------------------------------------------------------------------*
# Tipos
- Global selector => *
- Element/Type selector => h1, h2, p, div, a, i
- ID Selector => #box, #container
- Class Selector => .red, .m-4
- Attribute Selector => Pseudo-class, Pseudo-element e outros 
*---------------------------------------------------------------------------------------------------------------------*
# Força
- inline > tag style > tag link
0. Global selector
1. Element type
10. Class Selector
100. ID Selector
1000. Inline
*---------------------------------------------------------------------------------------------------------------------*
## Regra Import - Só deve ser usada em ultimo caso, caso tenha que sobrescrever uma biblioteca ja pre-configurada
Ex:
    .h1 {
        color: blue !important; Irá tirar a força de todos os outros elementos
    }
*---------------------------------------------------------------------------------------------------------------------*
## At-rules - Simbolizado pelo @
- @important => incluir um CSS externo
- @media => regras condicionais para dispositivos
- @font-face => fontes externas
- @keyframes => animações
*---------------------------------------------------------------------------------------------------------------------*
## Vendor Prefixes
-webkit- (chrome, Safari, iOS e Android)
-moz- (Mozilla Firefox)
-ms- (Internet Explorer)
-o- (Opera)

*/