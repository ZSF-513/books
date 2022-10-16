import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  getUsers() {
    return `<h1 style="color:red">getArticle</h1>`;
  }

  getAllUsers() {
    return `<h1 style="color:green">getArticles</h1>`;
  }
}
