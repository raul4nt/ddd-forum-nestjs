import { randomUUID } from "node:crypto"

export class UniqueEntityID {
    private value: string 

    toString() {
        return this.value
    }

    toValue() {
        return this.value
    }

    constructor(value?: string) {
        this.value = value ?? randomUUID()
    }
    // classe pra geraçao do ID randomico
    // nao explicarei muito pois é bem simplao, é util por
    //  ser reutilizavel mesmo
}