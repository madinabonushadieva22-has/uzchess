import { Module } from '@nestjs/common';
import { BookReviewsAdminController } from './controllers/admin/bookReview.admin.controller';
import { BookReviewsPublicController } from './controllers/public/bookReview.public.controller';
import { BookReviewsPublicService } from './services/public/bookReview.public.service';
import { BookReviewsAdminService } from './services/admin/bookReview.admin.service';


@Module({
  controllers: [BookReviewsAdminController, BookReviewsPublicController],
  providers: [BookReviewsAdminService, BookReviewsPublicService],
})
export class BookReviewsModule {}
