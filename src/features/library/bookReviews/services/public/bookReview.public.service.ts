import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookReviewListPublicDto } from '../../dtos/public/bookReview.list.public.dto';
import { BookReviewEntity } from '../../entities/bookReviews.entity';
import { BookReviewCreatePublicDto } from '../../dtos/public/bookReview.create.public.dto';
import { BookEntity } from '../../../books/entities/books.entity';


@Injectable()
export class BookReviewsPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getByBook(bookId: number): Promise<BookReviewListPublicDto[]> {
    const list = await BookReviewEntity.find({
      where: { bookId },
      order: { created: 'DESC' },
    });
    return plainToInstance(BookReviewListPublicDto, list, this.opts);
  }

  async create(
    userId: number,
    payload: BookReviewCreatePublicDto,
  ): Promise<BookReviewListPublicDto> {
    const book = await BookEntity.findOneBy({ id: payload.bookId });
    if (!book) throw new NotFoundException('Book with given id not found');
    const existing = await BookReviewEntity.findOneBy({
      userId,
      bookId: payload.bookId,
    });
    if (existing) throw new ConflictException('You already reviewed this book');
    const review = BookReviewEntity.create({
      userId,
      bookId: payload.bookId,
      rating: payload.rating,
      comment: payload.comment,
      created: new Date().toISOString(),
    } as BookReviewEntity);
    await BookReviewEntity.save(review);
    book.reviewsCount += 1;
    await BookEntity.save(book);
    return plainToInstance(BookReviewListPublicDto, review, this.opts);
  }
}
