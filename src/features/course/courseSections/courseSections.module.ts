import { Module } from '@nestjs/common';
import { CourseSectionsAdminController } from './controllers/admin/courseSections.admin.controller';
import { CourseSectionsPublicController } from './controllers/public/courseSections.public.controller';
import { CourseSectionsAdminService } from './services/admin/courseSections.admin.service';
import { CourseSectionsPublicService } from './services/public/courseSections.public.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseSectionEntity } from './entities/courseSections.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseSectionEntity])],
  controllers: [CourseSectionsAdminController, CourseSectionsPublicController],
  providers: [CourseSectionsAdminService, CourseSectionsPublicService],
  exports: [TypeOrmModule],
})
export class CourseSectionsModule {}