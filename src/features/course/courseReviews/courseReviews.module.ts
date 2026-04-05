import { Module } from '@nestjs/common';
import { CourseReviewsAdminController } from './controllers/admin/courseReviews.admin.controller';
import { CourseReviewsPublicController } from './controllers/public/courseReviews.public.controller';
import { CourseReviewsAdminService } from './services/admin/courseReviews.admin.service';
import { CourseReviewsPublicService } from './services/public/courseReviews.public.service';


@Module({
  controllers: [CourseReviewsAdminController, CourseReviewsPublicController],
  providers: [CourseReviewsAdminService, CourseReviewsPublicService],
})
export class CourseReviewsModule {}
