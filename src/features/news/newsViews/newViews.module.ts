import { Module } from '@nestjs/common';
import { NewsViewsAdminController } from './controllers/admin/newsViews.admin.controller';
import { NewsViewsPublicController } from './controllers/public/newsViews.public.controller';
import { NewsViewsPublicService } from './services/public/newsViews.public.service';
import { NewsViewsAdminService } from './services/admin/newsViews.admin.service';


@Module({
  controllers: [NewsViewsAdminController, NewsViewsPublicController],
  providers: [NewsViewsAdminService, NewsViewsPublicService],
})
export class NewsViewsModule {}
