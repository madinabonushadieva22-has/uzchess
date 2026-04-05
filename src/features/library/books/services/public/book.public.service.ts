import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookListPublicDto } from '../../dtos/public/book.list.public.dto';
import { BookEntity } from '../../entities/books.entity';
import { BookDetailPublicDto } from '../../dtos/public/book.detail.public.dto';


@Injectable()
export class BooksPublicService {
  private readonly opts = { excludeExtraneousValues: true };
  private readonly relations = ['author', 'category', 'language', 'difficulty'];

  async getAll(): Promise<BookListPublicDto[]> {
    const books = await BookEntity.find({
      relations: ['author', 'category'],
      order: { createdAt: 'DESC' },
    });
    return plainToInstance(BookListPublicDto, books, this.opts);
  }

  async getOne(id: number): Promise<BookDetailPublicDto> {
    const book = await BookEntity.findOne({
      where: { id },
      relations: this.relations,
    });
    if (!book) throw new NotFoundException('Book with given id not found');
    return plainToInstance(BookDetailPublicDto, book, this.opts);
  }
}
