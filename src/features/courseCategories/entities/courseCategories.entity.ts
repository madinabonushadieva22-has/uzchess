import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../core/base-model';


@Entity('courseCategories')
export class CourseCategoryEntity extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;

  @OneToMany(() => CourseEntity, (course) => course.category)
  courses!: CourseEntity[];
}
