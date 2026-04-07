import { Module } from '@nestjs/common';
import { PurchasedCoursesAdminController } from './controllers/admin/purchasedCourses.admin.controller';
import { PurchasedCoursesPublicController } from './controllers/public/purchasedCourses.public.controller';
import { PurchasedCoursesAdminService } from './services/admin/purchasedCourses.admin.service';
import { PurchasedCoursesPublicService } from './services/public/purchasedCourses.public.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchasedCourseEntity } from './entities/purchasedCourses.entity';


@Module({
  imports: [TypeOrmModule.forFeature([PurchasedCourseEntity])],
  controllers: [
    PurchasedCoursesAdminController,
    PurchasedCoursesPublicController,
  ],
  providers: [PurchasedCoursesAdminService, PurchasedCoursesPublicService],
  exports: [TypeOrmModule],
})
export class PurchasedCoursesModule {}
