import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsPublicController } from './news/controllers/news.public.controller';
import { NewsViewsModule } from './newsViews/newViews.module';
import { NewsService } from './news/services/news.service';
import { NewsAdminController } from './news/controllers/news.admin.controller';
import { News } from './news/entities/news.entity';

@Module({
  imports: [
    NewsViewsModule,
    TypeOrmModule.forFeature([News]),
  ],
  controllers: [NewsAdminController, NewsPublicController],
  providers: [NewsService],
  exports: [TypeOrmModule, NewsService],
})
export class NewsModule {}
