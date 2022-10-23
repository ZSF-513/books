import { Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { ArticleService } from './service';
@Controller('article')
export class ArticleController {
  private readonly logger = new Logger(ArticleService.name);
  constructor(private readonly articleService: ArticleService) {}

  @Get(':id')
  getArticle(@Param() params) {
    this.logger.log('log get article');
    return this.articleService.get(params?.id);
  }

  @Get('all')
  getArticles() {
    this.logger.log('log get all articles');
    return this.articleService.getAll();
  }

  @Post()
  async createArticle(@Param() params) {
    try {
      const article = await this.articleService.post(params);
      return article;
    } catch (e) {
      this.logger.error('create article error', e);
    }
  }
}
