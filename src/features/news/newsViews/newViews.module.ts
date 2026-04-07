import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsViewsAdminController } from './controllers/admin/newsViews.admin.controller';
import { NewsViewsPublicController } from './controllers/public/newsViews.public.controller';
import { NewsViewsPublicService } from './services/public/newsViews.public.service';
import { NewsViewsAdminService } from './services/admin/newsViews.admin.service';
import { NewsViewEntity } from './entities/newViews.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsViewEntity]),
  ],
  controllers: [NewsViewsAdminController, NewsViewsPublicController],
  providers: [NewsViewsAdminService, NewsViewsPublicService],
  exports: [TypeOrmModule, NewsViewsAdminService, NewsViewsPublicService],
})
export class NewsViewsModule {}
