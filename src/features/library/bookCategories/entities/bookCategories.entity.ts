import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { BookEntity } from '../../books/entities/books.entity';


@Entity('bookCategories')
export class BookCategoryEntity extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;

  @OneToMany(() => BookEntity, (book) => book.category)
  books!: BookEntity[];
}
