import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { CourseEntity } from '../../../course/courses/entities/courses.entity';
import { BookEntity } from '../../../library/books/entities/books.entity';

@Entity('languages')
export class LanguageEntity extends BaseModel {
  @Column({ length: 32, unique: true })
  title!: string;

  @Column({ length: 2, unique: true })
  code!: string;

  @OneToMany(() => CourseEntity, (course) => course.language)
  courses!: CourseEntity[];

  @OneToMany(() => BookEntity, (book) => book.language)
  books!: BookEntity[];
}
