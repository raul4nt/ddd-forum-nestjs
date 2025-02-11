import { Slug } from './value-objects/slug'
import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import dayjs from 'dayjs'

export interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  get authorId() {
    return this.props.authorId
  }

  get bestAnswerId() {
    return this.props.bestAnswerId
  }

  get title() {
    return this.props.title
  }

  get content() {
    return this.props.content
  }

  get slug() {
    return this.props.slug
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get isNew(): boolean {
    return dayjs().diff(this.createdAt, 'days') <= 3
    // se a diferença de dias for menor ou igual a 3, é novo
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

  set bestAnswerId(bestAnswerId: UniqueEntityID | undefined) {
    this.props.bestAnswerId = bestAnswerId
    this.touch()
  }

  set title(title: string) {
    this.props.title = title
    this.props.slug = Slug.createFromText(title)
    // quando atualiza o titulo, atualiza o slug tb
    this.touch()
    // usando o touch pra alterar o updatedAt
  }

  static create(
    props: Optional<QuestionProps, 'createdAt' | 'slug'>,
    id?: UniqueEntityID,
  ) {
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        // torna o slug opcional(se já tiver, usa, se nao, cria baseado no title)
        createdAt: new Date(),
      },
      id,
    )

    return question
  }
}
