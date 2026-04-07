import { AuthorEntity } from 'src/features/common/authors/entities/authors.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { BookCategoryEntity } from '../../bookCategories/entities/bookCategories.entity';
import { LanguageEntity } from '../../../common/language/entities/language.entity';
import { DifficultyEntity } from '../../../common/difficulties/entities/difficulties.entity';
import { BookLikeEntity } from '../../bookLikes/entities/bookLikes.entity';
import { BookReviewEntity } from '../../bookReviews/entities/bookReviews.entity';


@Entity('books')
export class BookEntity extends BaseModel {
  @Column()
  authorId!: number;

  @ManyToOne(() => AuthorEntity, (author) => author.books, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'authorId' })
  author!: AuthorEntity;

  @Column()
  categoryId!: number;

  @ManyToOne(() => BookCategoryEntity, (cat) => cat.books, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'categoryId' })
  category!: BookCategoryEntity;

  @Column()
  languageId!: number;

  @ManyToOne(() => LanguageEntity, (lang) => lang.books, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'languageId' })
  language!: LanguageEntity;

  @Column()
  difficultyId!: number;

  @ManyToOne(() => DifficultyEntity, (diff) => diff.books, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'difficultyId' })
  difficulty!: DifficultyEntity;

  @Column({ length: 128 })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ length: 128, nullable: true })
  image?: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price!: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  newPrice?: number;

  @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
  rating?: number;

  @Column({ default: 0 })
  reviewsCount!: number;

  @Column()
  pages!: number;

  @Column({ type: 'date' })
  pubDate!: string;

  @OneToMany(() => BookLikeEntity, (bl) => bl.book)
  likes!: BookLikeEntity[];

  @OneToMany(() => BookReviewEntity, (br) => br.book)
  reviews!: BookReviewEntity[];
}