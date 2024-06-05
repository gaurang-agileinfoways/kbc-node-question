import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from './entities/question.schema';
import { Model } from 'mongoose';
import { CustomError } from 'src/common/exceptions';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private readonly questionModel: Model<Question>,
  ) {}

  async create(body) {
    try {
      const data = await this.questionModel.create(body);
      return {
        question: data.question,
        options: data.options,
        answer: data.answer,
      };
    } catch (error) {
      if (error) {
        throw error;
      } else {
        throw CustomError.UnknownError(error?.message);
      }
    }
  }

  // findAll() {
  //   return `This action returns all question`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} question`;
  // }

  // update(id: number, updateQuestionDto: UpdateQuestionDto) {
  //   return `This action updates a #${id} question`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} question`;
  // }
}
