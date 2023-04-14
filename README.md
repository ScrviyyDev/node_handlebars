# Template Engine com Express.js

## O que é Template Engine?

_É uma forma de deixar o HTML dinâmico, inserindo variáveis do backend no frontend. É possível criar layouts que serão reaproveitados e é essencial para projetos que utilizam banco de dados, que não são estáticos_.
_Alguns exemplos de templates engine são Handlebars, EJS e Pug. Todos atingem o mesmo objetivo, porém existem algumas diferenças de funcionalidades._

## Handlebars

- O Handlebars é uma das template engines mais utilizadas.
- Colocamos os dados dinâmicos no HTML entre {{ }} para serem impressos.
- Podemos criar condicionais e também loops no template.
- Conhecido pela sua sintaxe limpa no front, nos força a não executar lógica no HTML.
- O nome do pacote é `express-handlebars`.