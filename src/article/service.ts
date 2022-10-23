import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleDocument } from './schema';
import { CreateArticleDto } from './dto';
@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private articleModel: Model<ArticleDocument>,
  ) {}

  get(id: string) {
    return this.articleModel.findById(id);
  }

  getAll() {
    return this.articleModel.find();
  }

  post(createArticleDto: CreateArticleDto): Promise<Article> {
    const createArticle = new this.articleModel(createArticleDto);
    return createArticle.save();
  }
}
