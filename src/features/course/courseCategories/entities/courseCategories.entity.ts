import { BaseModel } from 'src/core/base-model';
import { Column, Entity, OneToMany } from 'typeorm';
import { CourseEntity } from '../../courses/entities/courses.entity';



@Entity('courseCategories')
export class CourseCategoryEntity extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;

  @OneToMany(() => CourseEntity, (course) => course.category)
  courses!: CourseEntity[];
}
