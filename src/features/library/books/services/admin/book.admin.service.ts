import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookListAdminDto } from '../../dtos/admin/book.list.admin.dto';
import { BookEntity } from '../../entities/books.entity';
import { BookDetailAdminDto } from '../../dtos/admin/book.detail.admin.dto';
import { BookCreateAdminDto } from '../../dtos/admin/book.create.admin.dto';
import { BookUpdateAdminDto } from '../../dtos/admin/book.update.admin.dto';


@Injectable()
export class BooksAdminService {
  private readonly opts = { excludeExtraneousValues: true };
  private readonly relations = ['author', 'category', 'language', 'difficulty'];

  async getAll(): Promise<BookListAdminDto[]> {
    const books = await BookEntity.find({
      relations: ['author', 'category'],
      order: { createdAt: 'DESC' },
    });
    return plainToInstance(BookListAdminDto, books, this.opts);
  }

  async getOne(id: number): Promise<BookDetailAdminDto> {
    const book = await BookEntity.findOne({
      where: { id },
      relations: this.relations,
    });
    if (!book) throw new NotFoundException('Book with given id not found');
    return plainToInstance(BookDetailAdminDto, book, this.opts);
  }

  async create(payload: BookCreateAdminDto): Promise<BookDetailAdminDto> {
    const book = BookEntity.create(payload as BookEntity);
    await BookEntity.save(book);
    const saved = await BookEntity.findOne({
      where: { id: book.id },
      relations: this.relations,
    });
    return plainToInstance(BookDetailAdminDto, saved, this.opts);
  }

  async update(
    id: number,
    payload: BookUpdateAdminDto,
  ): Promise<BookDetailAdminDto> {
    const book = await BookEntity.findOneBy({ id });
    if (!book) throw new NotFoundException('Book with given id not found');
    Object.assign(
      book,
      Object.fromEntries(
        Object.entries(payload).filter(([_k, v]) => v !== undefined),
      ),
    );
    await BookEntity.save(book);
    const saved = await BookEntity.findOne({
      where: { id },
      relations: this.relations,
    });
    return plainToInstance(BookDetailAdminDto, saved, this.opts);
  }

  async delete(id: number): Promise<void> {
    const book = await BookEntity.findOneBy({ id });
    if (!book) throw new NotFoundException('Book with given id not found');
    await BookEntity.remove(book);
  }
}
