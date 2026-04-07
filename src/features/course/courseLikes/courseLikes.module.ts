import { Module } from '@nestjs/common';
import { CourseLikesAdminController } from './controllers/admin/courseLikes.admin.controller';
import { CourseLikesPublicController } from './controllers/public/courseLikes.public.controller';
import { CourseLikesAdminService } from './services/admin/courseLikes.admin.service';
import { CourseLikesPublicService } from './services/public/courseLikes.public.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseLikeEntity } from './entities/courseLikes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseLikeEntity])],
  controllers: [CourseLikesAdminController, CourseLikesPublicController],
  providers: [CourseLikesAdminService, CourseLikesPublicService],
  exports: [TypeOrmModule],
})
export class CourseLikesModule {}
