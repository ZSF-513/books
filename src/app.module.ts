import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/module';
import { ArticleModule } from './article/module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/book'), // Mongoose 链接
    UsersModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
