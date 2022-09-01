# O que é orientação a objetos?

- Uma forma de programar, que utiliza os objetos como o seu principal princípio.
- Além de utilizar conceitos e técnicas que envolvem objetos.
- A maioria dos softwares, na parte de back-end, são desenvolvidos em cima desse paradigma.
- Grandes frameworks se aproveitam desta técnica: Laravel, Django e etc...

# Métodos

- Propriedades que servem como funções.
- Ou seja, as ações dos objetos.
- Invocamos os métodos da mesma maneira que funções.

# Mais sobre Métodos

- Normalmente os métodos interagem com os objetos.
- Até mudando os valores das suas propriedades para corresponder a lógica do programa desenvolvido.
- this = este | se referencia a este objeto

# Prototypes

- Um objeto fallback de outro objeto.
- Quando um objeto recebe uma requisição de uma propriedade que não tem, ela é procura no prototype deste objeto.
- O prototype de um objeto criado do zero é o Object, que tem os métodos nativos da linguagem.

# Mais sobre Prototypes

- Quando criamos um objeto a partir de um outro, o base será o prototype.
- Ele herdará tanto os métodos e propriedades de Object( o prototype do objeto base)
- Quanto os do objeto base para este novo.