import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';

@Entity('authors')
export class AuthorEntity extends BaseModel {
  @Column({ length: 64 })
  fullName!: string;

  @OneToMany(() => CourseEntity, (course) => course.author)
  courses!: CourseEntity[];

  @OneToMany(() => BookEntity, (book) => book.author)
  books!: BookEntity[];
}
