import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { CourseEntity } from '../../../course/courses/entities/courses.entity';
import { BookEntity } from '../../../library/books/entities/books.entity';

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
