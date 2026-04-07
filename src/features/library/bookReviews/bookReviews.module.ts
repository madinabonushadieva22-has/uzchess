import { Module } from '@nestjs/common';
import { BookReviewsAdminController } from './controllers/admin/bookReview.admin.controller';
import { BookReviewsPublicController } from './controllers/public/bookReview.public.controller';
import { BookReviewsPublicService } from './services/public/bookReview.public.service';
import { BookReviewsAdminService } from './services/admin/bookReview.admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookReviewEntity } from './entities/bookReviews.entity';


@Module({
  imports: [TypeOrmModule.forFeature([BookReviewEntity])],
  controllers: [BookReviewsAdminController, BookReviewsPublicController],
  providers: [BookReviewsAdminService, BookReviewsPublicService],
  exports: [TypeOrmModule],
})
export class BookReviewsModule {}
