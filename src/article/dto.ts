export class CreateArticleDto {
  readonly title: string;
  readonly html: string;
  readonly description?: string;
  readonly category?: string;
  readonly user?: string;
}
