import { Module } from '@nestjs/common';
import { PurchasedCoursesAdminController } from './controllers/admin/purchasedCourses.admin.controller';
import { PurchasedCoursesPublicController } from './controllers/public/purchasedCourses.public.controller';
import { PurchasedCoursesAdminService } from './services/admin/purchasedCourses.admin.service';
import { PurchasedCoursesPublicService } from './services/public/purchasedCourses.public.service';


@Module({
  controllers: [
    PurchasedCoursesAdminController,
    PurchasedCoursesPublicController,
  ],
  providers: [PurchasedCoursesAdminService, PurchasedCoursesPublicService],
})
export class PurchasedCoursesModule {}
