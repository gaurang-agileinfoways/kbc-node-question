import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { QuestionService } from './question.service';
import { ADD_QUESTION } from 'src/common/constants/message-pattern.constant';
import { ResponseMessage } from 'src/common/decorators/response.decorator';
import { QUESTION_ADDED } from 'src/common/constants/success-response.constant';

@Controller()
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @ResponseMessage(QUESTION_ADDED)
  @MessagePattern(ADD_QUESTION)
  async create(@Payload() body: any) {
    return await this.questionService.create(body);
  }

  // @MessagePattern('findAllQuestion')
  // findAll() {
  //   return this.questionService.findAll();
  // }

  // @MessagePattern('findOneQuestion')
  // findOne(@Payload() id: number) {
  //   return this.questionService.findOne(id);
  // }

  // @MessagePattern('updateQuestion')
  // update(@Payload() updateQuestionDto: UpdateQuestionDto) {
  //   return this.questionService.update(updateQuestionDto.id, updateQuestionDto);
  // }

  // @MessagePattern('removeQuestion')
  // remove(@Payload() id: number) {
  //   return this.questionService.remove(id);
  // }
}
