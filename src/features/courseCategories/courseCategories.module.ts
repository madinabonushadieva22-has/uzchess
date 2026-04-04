import { Module } from '@nestjs/common';
import { CourseCategoriesAdminController } from './controllers/admin/courseCategories.admin.controller';
import { CourseCategoriesPublicController } from './controllers/public/courseCategories.public.controller';
import { CourseCategoriesAdminService } from './services/admin/courseCategories.admin.service';
import { CourseCategoriesPublicService } from './services/public/courseCategories.public.service';

@Module({
  controllers: [
    CourseCategoriesAdminController,
    CourseCategoriesPublicController,
  ],
  providers: [CourseCategoriesAdminService, CourseCategoriesPublicService],
})
export class CourseCategoriesModule {}
