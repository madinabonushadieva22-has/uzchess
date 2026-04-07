import { Module } from '@nestjs/common';
import { CoursesAdminController } from './controllers/admin/courses.admin.controller';
import { CoursesAdminService } from './services/admin/courses.admin.service';
import { CoursesPublicService } from './services/public/courses.public.service';
import { CoursesPublicController } from './controllers/public/courses.public.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './entities/courses.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  controllers: [CoursesAdminController, CoursesPublicController],
  providers: [CoursesAdminService, CoursesPublicService],
  exports: [CoursesAdminService, CoursesPublicService, TypeOrmModule],
})
export class CoursesModule {}
