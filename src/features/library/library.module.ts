import { Module } from '@nestjs/common';
import { BookCategoriesModule } from './bookCategories/bookCategories.module';
import { BooksModule } from './books/books.module';
import { BookLikesModule } from './bookLikes/bookLikes.module';
import { BookReviewsModule } from './bookReviews/bookReviews.module';

@Module({
  imports: [
    BookCategoriesModule,
    BooksModule,
    BookLikesModule,
    BookReviewsModule,
  ],
  exports: [
    BookCategoriesModule,
    BooksModule,
    BookLikesModule,
    BookReviewsModule,
  ],
})
export class LibraryModule {}
