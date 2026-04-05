import { BaseModel } from '../../../core/base-models';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../../common/users/enitities/users.entity';
import { BookEntity } from '../../library/books/enitities/books.entity';

@Entity('bookReviews')
export class BookReviewEntity extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => UserEntity, (user) => user.bookReviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user!: UserEntity;

  @Column()
  bookId!: number;

  @ManyToOne(() => BookEntity, (book) => book.reviews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'bookId' })
  book!: BookEntity;

  @Column({ type: 'int' })
  rating!: number;

  @Column({ length: 512, nullable: true })
  comment?: string;

  @Column({ type: 'timestamp' })
  created!: string;
}
