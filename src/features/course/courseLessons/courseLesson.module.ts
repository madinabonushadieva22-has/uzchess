import { Module } from '@nestjs/common';
import { CourseLessonsAdminController } from './controllers/admin/courseLesson.admin.controller';
import { CourseLessonsPublicController } from './controllers/public/courseLesson.public.controller';
import { CourseLessonsAdminService } from './services/admin/courseLesson.admin.service';
import { CourseLessonsPublicService } from './services/public/courseLesson.public.service';

@Module({
  controllers: [CourseLessonsAdminController, CourseLessonsPublicController],
  providers: [CourseLessonsAdminService, CourseLessonsPublicService],
})
export class CourseLessonsModule {}
