import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { NewsModule } from './features/news/news.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
  NewsModule,
  ],
})
export class AppModule {}
