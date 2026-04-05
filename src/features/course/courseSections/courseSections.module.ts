import { Module } from '@nestjs/common';
import { CourseSectionsAdminController } from './controllers/admin/courseSections.admin.controller';
import { CourseSectionsPublicController } from './controllers/public/courseSections.public.controller';
import { CourseSectionsAdminService } from './services/admin/courseSections.admin.service';
import { CourseSectionsPublicService } from './services/public/courseSections.public.service';

@Module({
  controllers: [CourseSectionsAdminController, CourseSectionsPublicController],
  providers: [CourseSectionsAdminService, CourseSectionsPublicService],
})
export class CourseSectionsModule {}