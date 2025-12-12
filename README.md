## 👥 Colaboradores
- **Ana Rosa**
- **Nilson Rodrigo**

# Fila Circular — Implementação em TypeScript

Trabalho da disciplina de Estrutura de Dados — IFPI  
Implementação de uma **Fila Circular** com capacidade fixa.

## 🎯 Operações implementadas

- Adicionar elemento ao final da fila  
- Remover e retornar o primeiro elemento  
- Mostrar o elemento do início (peek)  
- Verificar se está vazia  
- Verificar se está cheia  
- Mostrar quantidade de elementos  
- Mostrar capacidade máxima  
- Mostrar quantos espaços restam  
- Exibir todos os elementos em ordem

## 📝 Descrição

A Fila Circular utiliza um vetor fixo e dois ponteiros:

- **início** → posição do elemento mais antigo  
- **fim** → posição onde o próximo elemento será inserido  

Quando o fim chega ao final do vetor, ele retorna para o índice `0`, formando um círculo.

## 🧪 Exemplos de teste

```ts
let fila = new FilaCircular(5)

fila.enfileirar(10)
fila.enfileirar(20)
fila.enfileirar(30)
fila.enfileirar(40)

fila.desenfileirar()
fila.enfileirar(50)
fila.enfileirar(60)

console.log("Primeiro:", fila.peek())
console.log("Tamanho:", fila.tamanho())
console.log("Espaços restantes:", fila.espacosRestantes())

fila.exibir()
