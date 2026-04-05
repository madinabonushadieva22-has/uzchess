import { Injectable, NotFoundException } from '@nestjs/common';
import { BookLikeCreatePublicDto } from '../../dtos/public/bookLike.create.public.dto';
import { BookEntity } from '../../../books/entities/books.entity';
import { BookLikeEntity } from '../../entities/bookLikes.entity';


@Injectable()
export class BookLikesPublicService {
  async toggle(
    userId: number,
    payload: BookLikeCreatePublicDto,
  ): Promise<{ liked: boolean }> {
    const book = await BookEntity.findOneBy({ id: payload.bookId });
    if (!book) throw new NotFoundException('Book with given id not found');
    const existing = await BookLikeEntity.findOneBy({
      userId,
      bookId: payload.bookId,
    });
    if (existing) {
      await BookLikeEntity.remove(existing);
      return { liked: false };
    }
    const like = BookLikeEntity.create({
      userId,
      bookId: payload.bookId,
      created: new Date().toISOString(),
    } as BookLikeEntity);
    await BookLikeEntity.save(like);
    return { liked: true };
  }
}
