import { Module } from '@nestjs/common';
import { CourseCategoriesModule } from './courseCategories/courseCategories.module';
import { CoursesModule } from './courses/courses.module';
import { CourseSectionsModule } from './courseSections/courseSections.module';
import { UserLessonsModule } from './userLessons/userLessons.module';
import { PurchasedCoursesModule } from './purchasedCourses/purchasedCourses.module';
import { CourseLikesModule } from './courseLikes/courseLikes.module';
import { CourseReviewsModule } from './courseReviews/courseReviews.module';
import { CourseLessonsModule } from './courseLessons/courseLesson.module';

@Module({
  imports: [
    CourseCategoriesModule,
    CoursesModule,
    CourseSectionsModule,
    CourseLessonsModule,
    UserLessonsModule,
    PurchasedCoursesModule,
    CourseLikesModule,
    CourseReviewsModule,
  ],
  exports: [
    CourseCategoriesModule,
    CoursesModule,
    CourseSectionsModule,
    CourseLessonsModule,
    UserLessonsModule,
    PurchasedCoursesModule,
    CourseLikesModule,
    CourseReviewsModule,
  ],
})
export class CourseFeatureModule {}