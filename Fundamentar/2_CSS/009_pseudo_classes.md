# Pseudo Classes
-   É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico
-   Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em encima dele.
-   Pseudo-Classes começam com 2 pontos seguidos do nome pseudo class (:pseudo-class-name)

## Selecionando elementos com pseudo-classes (1)
*   Exemplo (ul li:first-child)
*   Porém é importante observar que a contagem dos filhos se inicia em ul e não no li, então caso haja
alguma outra tag que não seja li antes e dentro da ul, essa será o primeiro child

## Selecionando elementos com pseudo-classes (2)
*   Exemplo (article p:nth-of-type(1))
*   Essa regra ja consegue selecionar especificamente o filho desejado

## Selecionando elementos com pseudo-classes (3)
*   Exemplo (article p:nth-child(1))
*   Funciona da mesma forma que o of type