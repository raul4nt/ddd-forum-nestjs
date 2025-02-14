import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
    // método get pra acessar a prop content(que agora fica dentro da propriedade
    // props do constructor pai(Entity))
  }

  get authorId() {
    return this.props.authorId
  }

  get questionId() {
    return this.props.questionId
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get excerpt() {
    // excerpt significa trecho(pega um trecho da resposta)
    return this.content.substring(0, 120).trimEnd().concat('...')
    // cria uma substring do content q vai do 0 ao 120(caracteres),
    // depois usa o trim pra tirar os espaços do final e concatena com '...'
    // pra mostrar que continua(preview da resposta)
  }

  private touch() {
    this.props.updatedAt = new Date()
    // método que chamamos quando vamos setar(atualizar) algo
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
    // usando o touch pra alterar o updatedAt
  }

  static create(
    // funçao estatica padrao pra toda entidade(criar ela)
    props: Optional<AnswerProps, 'createdAt'>,
    // usamos esse Optional(definido na pasta
    // types para pegar as props e definir alguma como opcional)
    // neste caso, nao é que createdAt realmente seja opcional,
    // mas eu vou setar essa prop logo na criaçao da entidade nova
    // (nao quero passar ela manualmente em json numa rota post
    // , por exemplo)
    id?: UniqueEntityID,
  ) {
    const answer = new Answer(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return answer
  }
}
