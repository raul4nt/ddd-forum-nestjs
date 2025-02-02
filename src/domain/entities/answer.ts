import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface AnswerProps {
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

        static create(
        // funçao estatica padrao pra toda entidade(criar ela)
          props: Optional<AnswerProps, 'createdAt'>,
          // usamos esse Optional(definido na pasta 
          // types para pegar as props e definir alguma como opcional)
          // neste caso, nao é que createdAt realmente seja opcional, 
          // mas eu vou setar essa prop logo na criaçao da entidade nova
          // (nao quero passar ela manualmente em json numa rota post
          // , por exemplo)
          id?: UniqueEntityID
        ) {
          const answer = new Answer(
            {
              ...props,
              createdAt: new Date(),
            },
            id
          );
      
          return answer;
        }


}