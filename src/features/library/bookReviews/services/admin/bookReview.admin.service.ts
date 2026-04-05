import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookReviewListAdminDto } from '../../dtos/admin/bookReview.list.admin.dto';
import { BookReviewEntity } from '../../entities/bookReviews.entity';

@Injectable()
export class BookReviewsAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<BookReviewListAdminDto[]> {
    const list = await BookReviewEntity.find({ order: { created: 'DESC' } });
    return plainToInstance(BookReviewListAdminDto, list, this.opts);
  }

  async getByBook(bookId: number): Promise<BookReviewListAdminDto[]> {
    const list = await BookReviewEntity.find({
      where: { bookId },
      order: { created: 'DESC' },
    });
    return plainToInstance(BookReviewListAdminDto, list, this.opts);
  }

  async delete(id: number): Promise<void> {
    const review = await BookReviewEntity.findOneBy({ id });
    if (review) await BookReviewEntity.remove(review);
  }
}
