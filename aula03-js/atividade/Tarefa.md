# Desafio Completo de JavaScript

O desafio a seguir é uma atividade avaliativa a qual valerá 4 pontos, os quais serão somados com outras entregas para formar a nota completa.

## Objetivo

Criar uma aplicação simples que utilize variáveis, funções, escopo, [desestruturação][url-desestruturacao-freecodecamp], operadores de comparação, tipos de dados e manipulação de arrays/objetos. A aplicação deve simular uma "calculadora de tarefas".

## Declaração de Variáveis e Tipos
1. Declare variáveis para armazenar um nome de usuário e a idade.  

2. Declare uma variável para armazenar uma lista de tarefas (um array de objetos), onde cada tarefa tem:
    - ``descricao (string)``  
    - ``completa (booleano)``

3. Declare uma variável **limiteTarefas** que armazena o número máximo de tarefas permitidas.  

## Funções.

1. Crie uma função chamada **saudarUsuario** que recebe o nome do usuário, idade e imprime:

    ```sh
    Olá, [nome], você tem [idade] anos.  
    ```

2. Crie uma função chamada **adicionarTarefa** que adiciona uma nova tarefa à lista de tarefas, verificando se o número de tarefas não excede o limiteTarefas.  

3. Crie uma função chamada **marcarComoCompleta** que marca uma tarefa como completa.  

4. Crie uma função chamada **listarTarefas** que imprime todas as tarefas na tela (seja completa ou não).

5. Crie uma função chamada **removerTarefa** que remove uma tarefa da lista usando a descricao.

## Operações de Comparação

1. Verifique se a quantidade de tarefas no array é maior do que o ``limite (limiteTarefas)``. Se for, mostre uma mensagem 
dizendo:

    ```sh
    Você atingiu o limite de tarefas.
    ```

2. Dentro da função **marcarComoCompleta**, verifique se a tarefa existe antes de tentar marcá-la como completa.

## Desestruturação de Objetos
Na função **listarTarefas**, utilize desestruturação para acessar a descricao e o completa de cada tarefa e imprima uma 
mensagem formatada, como: 

```sh
Tarefa: [descricao] | Status: [completa].
```

## Desestruturação de Arrays
Dentro da função **adicionarTarefa**, se a lista de tarefas for menor que o limite, extraia os primeiros dois elementos da 
lista de tarefas usando desestruturação e mostre-os na tela.

## Requisitos

1. A estrutura de dados para armazenar as tarefas deve ser um array de objetos.

2. A aplicação deve imprimir informações detalhadas no console, incluindo mensagens de erro quando necessário (por 
exemplo, ao tentar adicionar mais tarefas do que o permitido).

3. Use desestruturação para simplificar o código em funções como **listarTarefas**.

4. Comente cada linha de código especificando o que esta acontecendo.

### Exemplo da saida esperada

```sh
Olá, João, você tem 38 anos!
Tarefa: Estudar | Status: Incompleta
Tarefa: Comprar leite | Status: Completa
Tarefa: Ir à academia | Status: Incompleta
Tarefa: Estudar | Status: Completa
Você atingiu o limite de tarefas.
```
[url-desestruturacao-freecodecamp]: https://www.freecodecamp.org/portuguese/news/como-usar-a-desestruturacao-de-arrays-e-objetos-em-javascript/ "desestruturação segundo freecodecamp"