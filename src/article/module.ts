import { Module } from '@nestjs/common';
import { ArticleController } from './controller';
import { ArticleService } from './service';
import { Article, ArticleSchema } from './schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
