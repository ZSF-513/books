import { Controller, Get, Logger } from '@nestjs/common';
import { ArticleService } from './service';
@Controller('article')
export class ArticleController {
  private readonly logger = new Logger(ArticleService.name);
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getUsers() {
    this.logger.log('log get user');
    return this.articleService.getUsers();
  }

  @Get('all')
  getAllUsers() {
    this.logger.log('log get all user');
    return this.articleService.getAllUsers();
  }
}
