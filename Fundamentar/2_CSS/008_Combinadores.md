# Combinators
-   Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização.

## Descendant combinator

*   Identificado por um espaço entre os seletores
*   Busca um elemento dentro do outro (body article h2 {color: red})

## Child combinator
*   Identificado pelo sinal ">" entre dois seletores
*   Seleciona somente o elemento que é filho direto do pai
*   Elementos depois do filtro direto serão desconsiderados
*   Exemplo (body > article > h2 {color: red})

## Adjacent sibling combinator
*   Identificado pelo sinal de "+" entre dois seletores
*   Seleciona somente o elemento do lado direto que é o irmão direto na hierarquia
*   Exemplo (h1 + p {color: red})

## General sibling combinator
*   Identificado pelo sinal "~" entre dois seletores
*   Seleciona todos os elementos irmãos
*   Exemplo (h1 ~ p )