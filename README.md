# Pokémon Go Guide

#### Data Lovers para <Laboratória>

  

## Índice

1. O Projeto

2. Objetivo

3. Definição de produto

4. Definição do usuário e Personas

5. Protótipos

6. Definição interface do usuário

7. Implementação interface de usuário

  

### 1. O Projeto

Projeto para a Laboratória - Brasil. O projeto consiste na criação de um API que possibilite o usuário a visualizar, filtrar, ordenar, e fazer cálculos com uma base de dados pré definida.

  

### 2. Objetivos

#### Objetivos de aprendizagem

Com este projeto, além de aplicar e aprofundar tudo o que aprendemos nos projetos anteriores, visamos alcançar os seguintes objetivos: 

 - Pensar nas necessidades dos usuários para criar uma interface que faça sentido e com tarefas claras e um produto que siga os princípios básicos de usabilidade.
   
 -  Definir os dados e de que forma mostrá-los no produto.  
   
 - Trabalhar com suas definições de pronto (definition of done) na organização e planificação de seu trabalho.

-  Manipular arrays e objetos.
   
 - Manipular o DOM (agregar elementos dinamicamente, baseados nos
   dados).
   
 -  Manejar eventos do DOM para permitir interação com o usuário (dados
   filtrados, ordenados, etc).
   
  - Entender os benefícios e complexidades de trabalhar em equipe.

#### Requisitos

Inclui Definição de produto clara e informativa no README.md.

Inclui esboço da solução (protótipo de baixa fidelidade e de alta fidelidade, se houver) no README.md.

Inclui a lista de problema detectados através dos testes de usabilidade no README.md.

UI: Mostra lista e/ou tabela com dados e/ou indicadores.

UI: Permite ordenar os dados por meio de um ou mais campos (asc e desc).

UI: Permite filtrar os dados com base em uma condição.

  
  

### 3. Definição de produto

O produto foi desenvolvido como ferramenta complementar para o jogador de Pokémon Go. No jogo, o usuário apenas consegue obter informações sobre os Pokémons caso os capture, assim, existe uma necessidade de conhecimento complementar para melhorar estratégias de jogo que não é atendida pela versão atual do Pokémon Go. O nosso aplicativo visa, de uma maneira prática, suprir essa demanda, fornecendo informações para o jogador iniciante e intermediário. Mostrando filtros por tipo e fraquezas e possibilitando ao jogador após filtrar, ordená-los por nome, candy, spawn-time e spawn chance.
  

### 4. Definição do usuário

Foram definidos o perfil de usuário e a partir dele, duas personas que possibilitassem um maior entendimento e aplicação do projeto.

#### Usuário

  

- Principais usuários do produto:

Idade: 25 a 25 anos

Onde mora: centros urbanos

Classe social: média/alta

Perfil de uso do jogo: iniciante a intermediário

  

- Objetivos dos usuários com relação ao produto:

  

- Dados mais importantes para verem na interface:

  

- Contexto de utilização do produto:

  

#### As personas


- Persona 1
![persona 1 Mateus](https://res.cloudinary.com/dgbrbelp9/image/upload/v1552421623/2.png)

  

_________

- Persona 2

  ![Persona 2 Janaína](https://res.cloudinary.com/dgbrbelp9/image/upload/v1552421711/1.png)

### 5. Protótipos

Protótipos 1 e 2: [https://marvelapp.com/439gja2](https://marvelapp.com/439gja2)

**Testes de usabilidade**

O protótipo 1 foi testado com potenciais usuários a partir das tarefas:

1. Abrir a lista -> filtrar por tipo fogo > voltar ao inicio
2. Abrir a lista e ordenar por spawn chance > voltar ao inicio
3. Abrir os dados para nerds-> filtrar por fraquezas água

Também foi solicitado que os usuários retornassem com comentários sobre layout, navegabilidade do protótipo e relevância das informações fornecidas.
 

Perfil dos potenciais usuários que testaram:

1. Homem, 28 anos, jogador iniciante

2. Homem, 25 anos, jogador intermediário

3. Homem, 24 anos, jogador avançado

4. Homem, 32 anos, jogador intermediário

5. Mulher, 30 anos, jogador iniciante

  

#### Resultados do teste com protótipo 1:

- Layout foi considerado adequado (simples e limpo);

- Praticamente todos os usuários conseguiram realizar as três tarefas/ apenas um ou dois entenderam que já era o produto final com as funcionalidades filtrar e ordenar combinadas e não como tarefas separadas;

- A parte de listagem de Pokémons (telas das tarefas 1 e 2) foi considerada relevante por todos os usuários;

- Para o usuário avançado, a parte de "Dados para Nerds" com os gráficos foi apontada como um pouco confusa em relação a quais dados seriam apresentados. Quando esclarecidos os dados escolhidos, os gráficos de porcentagem por tipo de Pokémon e por fraqueza foram considerados irrelevantes.

  

#### Reorganização do protótipo:
- Devido ao feedback recebido nos testes de usabilidade, foram excluídos os gráficos de porcentagem por tipo de Pokémon e por fraqueza. Dando mais destaque aos gráficos de candy, spawn-chance e spawn-time.



### 6. Definição interface do usuário
Devido aos feedbacks positivos de funcionamento do protótipo e do layout, o protótipo 2 foi utilizado como base e modelo para o desenvolvimento da aplicação. Outro ponto relevante é que o protótipo foi desenvolvido em duas telas no intuito de possibilitar a realização das tarefas e a divisão das informações de forma a checar a hierarquia de importância de cada uma para o usuário. Porém a aplicação foi implementada em uma única página, de modo a facilitar o acesso às informações independentemente da plataforma escolhida pelo usuário.
 
### 7. Implementação interface de usuário

#### Versionamento

0.0.1. Mostrar os dados dos Pokémons em cards;

0.0.2. Permitir ao usuário filtrar por tipo e por fraqueza e ordenar por ordem alfabética, candy, spawn chance e spawn time;

0.0.3. Calcular média aritmética, máximo e mínimo dos dados candy, spawn chance e spawn time;

0.0.4. (Hacker edition) - carregar um arquivo JSON por meio de um fetch;

0.0.5. (Hacker edition) - utilizar gráficos para mostrar

  

#### Execução

- HTML
O HTML foi estruturado utizando HTML semântico de acordo com o conteúdo. 
No body foram utilizadas as tags header (logo e chamada do site), nav com selects (botões para filtrar e ordenar, uma section para tabela, uma section para os gráficos, o main com uma section que contém os cards dos Pokémons e o footer com informações sobre as desenvolvedoras e a versão atual da aplicação.

- CSS
![cores utilizadas no projeto](https://res.cloudinary.com/dgbrbelp9/image/upload/v1552416892/cores.jpg)

O layout foi desenvolvido a partir do protótipo 2. As cores utilizadas foram: #171C3C, #5C9BC3, #D4D4D4, #5C9BC3, #FFCB05.

- JavaScript
O JavaScript foi desenvolvido manipulando o DOM, com funções específicas para cada funcionalidade da aplicação. A partir das ações de filtrar e ordenar disponíveis para o usuário, as informações da tabela e gráficos são atualizadas, além da forma como os cards dos Pokémons são exibidos. 

- Uso do Json
O JSON foi implementado a partir de um fetch onde todas as funções estão incluídas para utilizar os dados do arquivo. Na versão final, o fetch está comentado devido a incompatibilidade com alguns navegadores que não suportam a utilização de JSON a partir de um arquivo local.

- Uso de gráficos
Como demonstração, foi utilizado o modelo de gráfico de área do Google Charts, para exibir as informações de mínimo, média e máximo de candy necessário para evoluir de acordo com os filtros aplicados.




