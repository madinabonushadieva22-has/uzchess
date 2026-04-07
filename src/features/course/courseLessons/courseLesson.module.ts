import { Module } from '@nestjs/common';
import { CourseLessonsAdminController } from './controllers/admin/courseLesson.admin.controller';
import { CourseLessonsPublicController } from './controllers/public/courseLesson.public.controller';
import { CourseLessonsAdminService } from './services/admin/courseLesson.admin.service';
import { CourseLessonsPublicService } from './services/public/courseLesson.public.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseLessonEntity } from './entities/courseLessons.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseLessonEntity])],
  controllers: [CourseLessonsAdminController, CourseLessonsPublicController],
  providers: [CourseLessonsAdminService, CourseLessonsPublicService],
  exports: [TypeOrmModule],
})
export class CourseLessonsModule {}
