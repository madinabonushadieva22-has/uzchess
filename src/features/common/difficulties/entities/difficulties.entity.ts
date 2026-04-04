import { Column, Entity, OneToMany } from 'typeorm';
import { CourseEntity } from '../../courses/courses/enitities/courses.entity';
import { BookEntity } from '../../library/books/enitities/books.entity';
import { BaseModel } from '../../../../core/base-model';

@Entity('difficulties')
export class DifficultyEntity extends BaseModel {
  @Column({ length: 32, unique: true })
  title!: string;

  @Column({ length: 128 })
  icon!: string;

  @OneToMany(() => CourseEntity, (course) => course.difficulty)
  courses!: CourseEntity[];

  @OneToMany(() => BookEntity, (book) => book.difficulty)
  books!: BookEntity[];
}
