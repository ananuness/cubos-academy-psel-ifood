![logo cubos + ifood](https://user-images.githubusercontent.com/51466624/121298648-98f3de00-c8ca-11eb-95ce-fcaac8cdbcf7.jpg)

# Cubos Academy | Desafio PSEL iFood - 01/2021
Neste repositório estão todos os códigos submetidos corretamente (apenas as funções) da 2º fase do Processo Seletivo da **Cubos Academy** em parceria com a **iFood**, a fim de oferecer bolsas integrais para pessoas de baixa renda terem acesso ao curso **Programação do Zero**, que tem como objetivo formar desenvolvedores de *software* jr.

## Problemas

### &#128995; Só os tops! &#129297;
No e-commerce em que você trabalha são vendidos os mais diferentes tipos de produtos. Produtos que custam mais de 100 reais são considerados TOP DE LINHA. O gerente comercial da empresa, também conhecido como SEU CHEFE, quer saber duas coisas:

+ Quantos reais a empresa faturou através da venda de produtos TOP DE LINHA.
+ Quantos % do faturamento total da empresa a venda de produtos TOP DE LINHA representa.

Como a lista de produtos é muito grande, não é possível fazer esse cálculo manualmente. Faça um programa que calcule as informações pedidas por seu chefe.

**Input Format**

A entrada será sempre um *array* contendo vários objetos. Cada objeto representa um produto (que pode ou não ser TOP DE LINHA). Assim a entrada será como no exemplo abaixo:
~~~javascript
//preco em centavos
[ { nome: "Camiseta", preco: 7000 }, { nome: "Tenis", preco: 8000 }, { nome: "Relogio", preco: 15000 } ];
~~~

**Output Format**

Imprima na tela apenas um objeto no formato abaixo (chame *console.log()* passando como argumento a variável que armazena o seu objeto de resposta):
~~~javascript
{ totalTop: 15000, percentual: 0.5 }
~~~
<br>

### &#128995; Cinco ou mais, um é grátis! &#128184;

Uma loja que está com um estoque muito grande acumulado resolveu fazer uma promoção para que os clientes levem mais produtos.

Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!

Para que essa promoção funcionasse, foi necessário fazer uma atualização no *software* do caixa para que fosse possível calcular o valor correto que o cliente deve pagar.
Você ficou com essa tarefa!

**Input Format**

>A entrada será sempre um *array* contendo apenas números inteiros e positivos representando o valor de cada um dos produtos (em centavos).

**Output Format**

>Imprima na tela apenas um número que representa o total que deve ser pago pelo cliente (aplicando a promoção quando fizer sentido, claro).
<br>

### &#128995; Abecedário &#128288;

Uma brincadeira muito comum entre crianças é o ABC. Nessa brincadeira, uma letra é sorteada a cada rodada e cada criança que está brincando deve escrever uma palvra de uma determinada categoria que comece com a letra que foi sorteada.

Por exemplo, caso a letra sorteada seja a letra "M" e o tema seja "frutas" as crianças podem falar coisas como:
> melancia, melão, maçã, mamão...

E todas as respostas acima estariam corretas, pois começam com a letra M.

Porém caso uma criança falasse "Laranja", por exemplo, essa criança teria perdido! O seu papel é fazer um programa que calcule quantas crianças perderam na rodada.

**Input Format**

A entrada terá sempre duas variáveis:

<blockquote> letra, que contém a letra que foi sorteada para essa rodada (sempre minúscula e sem acentos); e
<br> palavras, que será sempre um <i>array</i> de strings contendo as palavras que cada uma das crianças escreveu (sempre minúsculas e sem acento). </blockquote>

**Output Format**

>Imprima na tela apenas um número inteiro contendo a quantidade de crianças que PERDERAM nessa rodada.
<br>

### &#128995; Tem copa? Tem jogos? Não? MEH &#127941;

No Brasil, em 2014, tivemos a Copa do Mundo de futebol e em 2016 tivemos os Jogos Olímpicos. Foi um período tão legal que merecia até termos enforcado o ano de 2015, não é mesmo? Sabe-se que as copas do mundo e as olimpíadas acontecem a cada 4 anos. É tão legal, que os anos em que não há nem um nem outro acabam ficando bem sem graça.

Faça um programa que determina se num dado ano haverá jogos olímpicos, copa do mundo ou se vai ser um ano meio MEH. Sem graça.

**Input Format**

>A entrada será sempre um número inteiro e positivo maior que 2021 representando o ano que se deseja saber se terá Copa do Mundo, Olimpíadas, ou se será um ano MEH.

**Output Format**

<blockquote> Imprima na tela COPA caso no ano dado haja copa do mundo.
<br> Imprima na tela JOGOS caso no ano dado haja olimpíadas.
<br> Imprima na tela MEH caso no ano dado não haja nem copa do mundo nem olimpíadas. </blockquote> 
<br>

### &#128995; Mobilapp &#128242;

Você está trabalhando num aplicativo de mobilidade e ficou com a tarefa de fazer a funcionalidade que calcula o valor a pagar do usuário. Olha só que responsa, hein?

A lógica é a seguinte:

+ Caso a viagem seja muito curta, ou seja, dure menos de 05 minutos, a corrida custará 6 reais, indepententemente da distância percorrida.
+ Caso a viagem seja média, ou seja, dure entre 05 minutos e uma hora, a viagem custará 1 real por minuto mais 50 centavos por quilômetro percorrido.
+ Para viagens mais longas, que durem mais de uma hora, o preço da viagem deixa de depender do tempo e passa a depender apenas da distância percorrida. Neste caso, a viagem custará:
<br> 2 reais por quilômetro, caso a distância seja menor que 100km.
<br> 1,50 reais por quilômetro, caso a distância seja 100km ou mais.

**Input Format**

>A entrada será composta por dois parâmetros: **tempo** sempre dado em minutos e **distancia** sempre dada em quilômetros.

**Output Format**

>Imprima na tela o preço total a ser pago pelo usuário, EM CENTAVOS. Lembre-se de que 1 real equivalem a 100 centavos.
<br>

### &#128995; No escurinho do cinema &#127871;

Você ficou responsável por desenvolver o *software* do cinema, que indica se uma pessoa pode ter acesso ao filme. Além disso, o programa verifica se a pessoa tem direito a meia entrada ou se o ingresso deve ser inteira.

Para ter acesso ao filme, a pessoa deve atender os seguintes requisitos:

+ Ter ingresso; e
+ Ter idade igual ou superior a censura ou estar acompanhada dos pais;

Uma vez determinado que a pessoa pode ter acesso, é necessário verificar se ela tem direito a meia. Para isso, ela precisa atender a pelo menos uma das condições abaixo:

+ Ter carteirinha de estudante.
+ Ter menos de 18 anos.

**Input Format**

A entrada será sempre um objeto, com os dados necessários para a análise, no seguinte formato:
~~~javascript
{ temIngresso: true, idade: 23, temCarteirinha: true, censura: 16, estaComPais: false }
~~~

**Output Format**

A saída deverá ser sempre uma das três opções abaixo:

<blockquote> ACESSO NEGADO caso a pessoa não possa ter acesso ao filme.
<br> INTEIRA caso a pessoa tenha acesso ao filme mediante apresentação de ingresso de inteira.
<br> MEIA caso a pessoa tenha acesso ao filme mediante apresentação de ingresso de meia entrada. </blockquote>
<br>

### &#128995; Contagem Regressiva &#128163;

Todo bom filme de ação que se preze deve ter uma cena em que uma bomba está prestes a explodir. O cenário é clássico: uma contagem regressiva, um fio azul, um veículo em movimento e a grande dúvida: cortar o fio vermelho ou o azul?
<br>Faça um programa que, dado um número a partir do qual deve-se começar a contagem regressiva, imprima na tela a contagem regressiva desse número até 0. Ao final da contagem, imprima a mensagem KABUM.

Importante: cada número deve ser impresso em uma nova linha, assim como a mensagem KABUM ao final.

**Input Format**

>A entrada será sempre um número positivo a partir do qual deve-se começar a contagem regressiva.

**Output Format**

>Imprima na tela a contagem regressiva, colocando cada número da contagem em uma linha, incluindo o valor inicial fornecido na entrada e o zero. Na última linha, deve estar sempre a palavra KABUM.
<br>

### &#128995; Jokeeeeenpô! &#9994;

Disputando o controle remoto da TV, dois irmãos, João e André decidiram quem ficaria com o controle jogando pedra, papel ou tesoura.
<br>Cada jogador escolhe uma das opções para jogar, sendo que:

+ Pedra ganha de tesoura, mas perde de papel.
+ Papel ganha de pedra, mas perde de tesoura.
+ Tesoura ganha de papel, mas perde de pedra.
+ Caso ambos os jogadores joguem a mesma coisa, há um empate.

O seu objetivo é fazer um programa de computador que determine quem é o vencedor do jogo, ou informar se houve um empate.

**Input Format**

A entrada será sempre composta por dois parâmetros:

<blockquote> joao: variável que contém um string, informando se ele jogou PEDRA, PAPEL ou TESOURA; e
<br> andre: variável que contém um string, informando se ele jogou PEDRA, PAPEL ou TESOURA </blockquote>

**Output Format**

>Imprima na tela se o vencedor do jogo foi JOAO ou ANDRE. Caso o jogo dê empate, imprima EMPATE. Utilize sempre em maiúsculas para essas *strings* e sem acentuação.
<br>

### &#128995; Me segue no insta! &#128248;

Você está trabalhando numa empresa que desenvolveu um aplicativo que cria filtros para redes sociais. Neste aplicativo, para aplicar o filtro adequadamente, é necessário identificar se a foto foi tirada no modo retrato, paisagem, ou se a foto é quadrada.

Você ficou com a tarefa de desenvolver essa funcionalidade.

**Input Format**

>A entrada será sempre composta de duas variáveis **largura** e **altura** que serão números inteiros e positivos.

**Output Format**

<blockquote> Imprima na tela RETRATO caso a altura seja maior que a largura.
<br> Imprima na tela PAISAGEM caso a largura seja maior que a altura.
<br> Imprima na tela QUADRADA caso a largura e altura sejam iguais. </blockquote>
<br>

### &#128995; Apenas para maiores &#128286;

Numa determinada festa é permitida a entrada apenas de pessoas maiores de idade. Você, que é uma pessoa programadora que trabalha na empresa que está produzindo a festa, deve fazer um programa que, dada a idade da pessoa na tela, informe se a pessoa pode entrar ou deve ser barrada.

**Input Format**

>A entrada do problema será sempre uma variável idade do tipo *number*. Essa idade é sempre um número inteiro e positivo.

**Output Format**

<blockquote> Você deve imprimir na tela PODE ENTRAR caso a pessoa seja maior de idade (ou seja, 18 anos ou mais).
<br> Caso a pessoa seja menor de idade imprima na tela ACESSO NEGADO. </blockquote>
