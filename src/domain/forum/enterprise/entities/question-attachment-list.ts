import { WatchedList } from '@/core/entities/watched-list'
import { QuestionAttachment } from './question-attachment'

export class QuestionAttachmentList extends WatchedList<QuestionAttachment> {
  compareItems(a: QuestionAttachment, b: QuestionAttachment): boolean {
    return a.attachmentId === b.attachmentIdimport { PaginationParams } from '@/core/repositories/pagination-params'
    import { AnswerComment } from '../../enterprise/entities/answer-comment'
    
    export interface AnswerCommentsRepository {
      findById(id: string): Promise<AnswerComment | null>
      findManyByAnswerId(
        answerId: string,
        params: PaginationParams,
      ): Promise<AnswerComment[]>
      create(answerComment: AnswerComment): Promise<void>
      delete(answerComment: AnswerComment): Promise<void>
    }
    
  }
}
