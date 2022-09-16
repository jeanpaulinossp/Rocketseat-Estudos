# Box Model / Caixas
- Tamanho (larga x altura)  width x height
- Conteúdo                  content
- Bordas                    border
- Preenchimento interno     padding
- Espaços fora da Caixa     margin
*-----------------------------------------------------------------------------------------------------------------*
# Box Sizing
- box-sizinga: border-box; Faz com que o cálculo seja feito a partir da borda
*-----------------------------------------------------------------------------------------------------------------*
# Display
- block (<p> <div> <section> e todos os headings <h1><h2> e etc)
    => ocupa toda a selinha, colocando o próximo elemento abaixo desse
    => width e height são respeitados
    => padding, margin, border irão funcionar normalmente

- inline (<a> <strong> <span> <em>)
    => elemento ao lado do outro
    => width e height não funcionam
    => somente valores horizontais de margin, padding e border
*-----------------------------------------------------------------------------------------------------------------*
# Margin (Espaço entre os elementos)
- margin-top - margin-right - margin-bottom - margin-left
- values: <lenght> - <porcentage> - auto
- margin(4): 12px 16px 10px 4px => todas as propriedades
- margin(3): 12px(top) - 16px(right e left) - 0(bottom)
- margin(2): 8px(top e bottom) 16px(right e left)
- margin(1): 8px (todos)
*-----------------------------------------------------------------------------------------------------------------*
# Padding (Preenchimento interno da caixa) - Mesma forma do Margin
- padding-top - padding-right - padding-bottom - padding-left
- values: <lenght> - <percentage> - auto
!Pode afetar o Margin, pois ele empurra
*-----------------------------------------------------------------------------------------------------------------*
# Border
- value: 
<border-style> => solid, dotted, dashed, double, groove, ridge, inset, outset 
<border-width> => <lenght>
<border-color> => <color>

# Outline
- Difere em 4 sentidos
    => Não modifica o tamanho da caixa, pois não é parte do Box Model
    => Poderá ser diferente de retangular
    => Não permite ajuste individuais
    => Mais usado pelo user agent para acessbilidade
