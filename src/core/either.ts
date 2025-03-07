// either = ou um ou outro
// left - erro; right - sucesso;
// UI -> CONTROLLER -> CASO DE USO -> ENTIDADE -> CASO DE USO -> REPOSITORIO -> BANCO DE DADOS
// se der tudo certo, fluxo vai sempre pra direita
// se nao, left(erro)

// Error
export class Left<L> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }
}

// Success
export class Right<R> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }
}

export type Either<L, R> = Left<L> | Right<R>

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}
