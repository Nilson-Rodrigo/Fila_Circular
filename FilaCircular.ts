class FilaCircular {
    private elementos: number[]
    private capacidade: number
    private inicio: number
    private fim: number
    private quantidade: number

    constructor(capacidade: number) {
        this.capacidade = capacidade
        this.elementos = new Array(capacidade)
        this.inicio = 0
        this.fim = 0
        this.quantidade = 0
    }

    estaVazia(): boolean {
        return this.quantidade === 0
    }

    estaCheia(): boolean {
        return this.quantidade === this.capacidade
    }

    enfileirar(el: number): void {
        if (this.estaCheia()) {
            console.log("A fila está cheia!")
            return
        }

        this.elementos[this.fim] = el
        this.fim = (this.fim + 1) % this.capacidade
        this.quantidade++

        console.log(`Elemento ${el} inserido!`)
        this.exibir()
    }

    desenfileirar(): number | null {
        if (this.estaVazia()) {
            console.log("A fila está vazia!")
            return null
        }

        const removido = this.elementos[this.inicio]
        this.inicio = (this.inicio + 1) % this.capacidade
        this.quantidade--

        console.log(`Elemento ${removido} removido!`)
        this.exibir()

        return removido
    }

    peek(): number | null {
        return this.estaVazia() ? null : this.elementos[this.inicio]
    }

    tamanho(): number {
        return this.quantidade
    }

    espacosRestantes(): number {
        return this.capacidade - this.quantidade
    }

    getCapacidade(): number {
        return this.capacidade
    }

    exibir(): void {
        let resultado = []
        for (let i = 0; i < this.quantidade; i++) {
            let index = (this.inicio + i) % this.capacidade
            resultado.push(this.elementos[index])
        }
        console.log("Fila:", resultado)
    }
}
