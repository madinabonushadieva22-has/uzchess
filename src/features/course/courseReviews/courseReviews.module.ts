import { Module } from '@nestjs/common';
import { CourseReviewsAdminController } from './controllers/admin/courseReviews.admin.controller';
import { CourseReviewsPublicController } from './controllers/public/courseReviews.public.controller';
import { CourseReviewsAdminService } from './services/admin/courseReviews.admin.service';
import { CourseReviewsPublicService } from './services/public/courseReviews.public.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseReviewEntity } from './entities/courseReviews.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CourseReviewEntity])],
  controllers: [CourseReviewsAdminController, CourseReviewsPublicController],
  providers: [CourseReviewsAdminService, CourseReviewsPublicService],
  exports: [TypeOrmModule],
})
export class CourseReviewsModule {}
