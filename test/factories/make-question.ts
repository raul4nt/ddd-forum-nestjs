import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  // partial vai tornar qualquer coisa de dentro do QuestionProps como
  // opcional, ou seja, recebo no override justamente isso(pra tornar opcional)
  // recebo qualquer prop de QuestionProps mas ela serao opcionais
  const question = Question.create({
    authorId: new UniqueEntityID(),
    title: 'Example question',
    slug: Slug.create('example-question'),
    content: 'Example content',
    ...override,
    // ou seja, este override serve para eu sobrescrever alguma prop
    // assim, elas nao ficam estaticas, e eu posso mudar ela em um teste,
    // por exemplo
  })

  return question
}
