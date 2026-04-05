import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { CourseSectionEntity } from '../../courseSections/entities/courseSections.entity';
import { UserLessonEntity } from '../../userLessons/entities/userLessons.entity';
import { CourseEntity } from '../../courses/entities/courses.entity';


@Entity('courseLessons')
export class CourseLessonEntity extends BaseModel {
  @Column()
  courseId!: number;

  @ManyToOne(() => CourseEntity, (course) => course.lessons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseId' })
  course!: CourseEntity;

  @Column()
  courseSectionId!: number;

  @ManyToOne(() => CourseSectionEntity, (section) => section.lessons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseSectionId' })
  section!: CourseSectionEntity;

  @Column({ length: 128 })
  title!: string;

  @Column({ type: 'text', nullable: true })
  content?: string;

  @Column({ length: 128, nullable: true })
  thumbnail?: string;

  @Column({ length: 256 })
  video!: string;

  @Column({ nullable: true })
  order?: number;

  @Column({ type: 'timestamp' })
  date!: string;

  @Column({ default: false })
  isFree!: boolean;

  @OneToMany(() => UserLessonEntity, (ul) => ul.lesson)
  userLessons!: UserLessonEntity[];
}
