import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { UserEntity } from '../../../common/users/entities/user.entity';
import { BookEntity } from '../../books/entities/books.entity';


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
