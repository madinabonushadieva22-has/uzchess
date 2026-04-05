import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { CourseEntity } from '../../../course/courses/entities/courses.entity';
import { BookEntity } from '../../../library/books/entities/books.entity';

@Entity('authors')
export class AuthorEntity extends BaseModel {
  @Column({ length: 64 })
  fullName!: string;

  @OneToMany(() => CourseEntity, (course) => course.author)
  courses!: CourseEntity[];

  @OneToMany(() => BookEntity, (book) => book.author)
  books!: BookEntity[];
}
