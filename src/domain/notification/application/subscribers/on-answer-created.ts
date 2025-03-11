import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { AnswerCreatedEvent } from '@/domain/forum/enterprise/events/answer-created-event'

export class OnAnswerCreated implements EventHandler {
  constructor() {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewAnswerNotification.bind(this),
      // usamos o bind pra indicar que quando eu usar o this, ele tem que ser o mesmo
      // this deste momento aqui(ou seja, desta classe)
      // isso porque a funçao sendAnswerNotification sera usada como handler la dentro de DomainEvents, e lá
      // o this significará outra coisa pois será um this DA OUTRA CLASSE, e nao desta
      // entao é mais pra nao dar erro mesmo
      AnswerCreatedEvent.name,
    )
  }

  private async sendNewAnswerNotification({ answer }: AnswerCreatedEvent) {
    console.log(answer)
  }
}
