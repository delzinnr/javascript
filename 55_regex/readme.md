# O Que são expressões regulares?

- Uma forma de encontrar padrões em uma string.
- Validar se só tem números.
- Em vez de criarmos funções complexas, podemos encontrar dados em texto por meio das expressões regulares.
- Também chamadas de regex.

# Criando uma expressão regular

- As expressões regulares no JS são um tipo de objeto.
- Podemos instancia-lo de duas formas.
- New RegExp e /.../;

# Verificando padrões com regex

- Depois da definição do padrão por meio da regex.
- Utilizamos o método test() para verificar se o padrão é retornado.
- Com isso vamos receber de resposta true or false.

# Conjunto de caracteres

- Podemos definir um conjunto de caracteres para encontrar por regex.
- Basta por entre []
- Com um traço podemos definir um intervalo também

# Caracteres especiais

- \d - Qualquer dígito de caractere
- \w - Um caractere alfanumérico(teste)
- \s - Qualquer caractere de espaço em branco
- \D - Caracteres que não são dígitos
- \W - Caractere não-alfanumérico
- \S - Caractere que não seja espaço em branco
- . - Qualquer caractere, menos nova linha
