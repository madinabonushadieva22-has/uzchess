import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { CourseLessonEntity } from '../../courseLessons/entities/courseLessons.entity';
import { CourseEntity } from '../../courses/entities/courses.entity';


@Entity('courseSections')
export class CourseSectionEntity extends BaseModel {
  @Column()
  courseId!: number;

  @ManyToOne(() => CourseEntity, (course) => course.sections, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseId' })
  course!: CourseEntity;

  @Column({ length: 256 })
  title!: string;

  @Column({ nullable: true })
  order?: number;

  @Column({ type: 'timestamp' })
  date!: string;

  @OneToMany(() => CourseLessonEntity, (lesson) => lesson.section)
  lessons!: CourseLessonEntity[];
}
