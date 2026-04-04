import { Column, Entity, OneToMany } from 'typeorm';
import { CourseEntity } from '../../courses/courses/entities/courses.entity';
import { BookEntity } from '../../library/books/entities/books.entity';
import { BaseModel } from '../../../../core/base-model';

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
