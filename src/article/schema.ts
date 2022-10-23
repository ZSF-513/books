import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article extends Document {
  @Prop()
  title: string;

  @Prop()
  html: string;

  //   @Prop()
  //   desc?: string;

  //   @Prop()
  //   category?: string;

  //   @Prop()
  //   user?: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
