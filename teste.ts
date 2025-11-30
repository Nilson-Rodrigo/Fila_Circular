let fila = new FilaCircular(5)

fila.enfileirar(10)
fila.enfileirar(20)
fila.enfileirar(30)
fila.enfileirar(40)

fila.desenfileirar()
fila.enfileirar(50)
fila.enfileirar(60)

console.log("Primeiro da fila:", fila.peek())
console.log("Tamanho:", fila.tamanho())
console.log("Capacidade:", fila.getCapacidade())
console.log("Espaços restantes:", fila.espacosRestantes())

fila.exibir()
