import { Module } from '@nestjs/common';
import { NewsPublicController } from './news/controllers/news.public.controller';
import { NewsViewsModule } from './newsViews/newViews.module';
import { NewsService } from './news/services/news.service';
import { NewsAdminController } from './news/controllers/news.admin.controller';

@Module({
  imports: [NewsViewsModule],
  controllers: [NewsAdminController, NewsPublicController],
  providers: [NewsService],
})
export class NewsModule {}
