import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionResolver } from './question/question.resolver';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [QuestionModule],
  controllers: [AppController],
  providers: [AppService, QuestionResolver],
})
export class AppModule {}
