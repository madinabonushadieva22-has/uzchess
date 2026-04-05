import { BaseModel } from '../../../core/base-models';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../../common/users/enitities/users.entity';
import { BookEntity } from '../../library/books/enitities/books.entity';

@Entity('bookLikes')
export class BookLikeEntity extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => UserEntity, (user) => user.bookLikes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user!: UserEntity;

  @Column()
  bookId!: number;

  @ManyToOne(() => BookEntity, (book) => book.likes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'bookId' })
  book!: BookEntity;

  @Column({ type: 'timestamp' })
  created!: string;
}
