import { Module } from '@nestjs/common';
import { CourseSectionsAdminController } from './controllers/courseSections.admin.controller';
import { CourseSectionsPublicController } from './controllers/courseSections.public.controller';
import { CourseSectionsAdminService } from './service/courseSections.admin.service';
import { CourseSectionsPublicService } from './service/courseSections.public.service';

@Module({
  controllers: [CourseSectionsAdminController, CourseSectionsPublicController],
  providers: [CourseSectionsAdminService, CourseSectionsPublicService],
})
export class CourseSectionsModule {}