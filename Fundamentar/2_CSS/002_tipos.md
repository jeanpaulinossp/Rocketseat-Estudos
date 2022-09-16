# Tipos Númericos
- <integer>
- <number>
- <dimension> => É um <number> com uma unidade junto: 90deg, 2s, px
- <porcentagem> => Representa a fração de outro número: 50% da página, de uma div, de um elemento
*-----------------------------------------------------------------------------------------------------------------*
# Unidades Comuns
- <lenght> => Representa um valor de distância: px, em, vw
- <angle> => Representa um ângulo: deg, rad, turn
- <time> => Representa um tempom s, ms
- <resolution> => Representa resoluções para dispositivos: dpi
*-----------------------------------------------------------------------------------------------------------------*
# Distâncias Absolutas
- cm => centimetros (Não recomendável)
- in => polegadas
- px => pixels (Mais recomendável!!!)
*-----------------------------------------------------------------------------------------------------------------*
# Distâncias Relativas (Mais usado pois se pode se adaptar melhor aos diversos tipos de telas)
- em => Tamanho que foi definido da font pai (div 18px / p 1em) (div 18px / p 2m = 36px)
- rem => Tamanho da font do elemento raiz (root ou html) Busca do root ou html em vez do pai
- vw => 1% da viewport width
- vh => 1% da viweport height
*-----------------------------------------------------------------------------------------------------------------*
# Posições
- Representa um conjunto de coordenadas 2D (top, right, bottom, left e center)
- Ex: background-position: bottom right (Vai jogar a imagem para baixo a direita)
*-----------------------------------------------------------------------------------------------------------------*
# Funções (Em programação, funções são reconhcidas por causar um reaproveitamento de código)
- rgb()
- hsl()
- url()
- calc(100% - 40px)