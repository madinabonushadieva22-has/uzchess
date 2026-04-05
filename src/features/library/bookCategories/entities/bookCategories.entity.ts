import { BaseModel } from '../../../core/base-models';
import { Column, Entity, OneToMany } from 'typeorm';
import { BookEntity } from '../../library/books/enitities/books.entity';

@Entity('bookCategories')
export class BookCategoryEntity extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;

  @OneToMany(() => BookEntity, (book) => book.category)
  books!: BookEntity[];
}
