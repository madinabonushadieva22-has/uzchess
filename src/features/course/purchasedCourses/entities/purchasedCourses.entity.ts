import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { UserEntity } from '../../../common/users/entities/user.entity';
import { CourseEntity } from '../../courses/entities/courses.entity';


@Entity('purchasedCourses')
export class PurchasedCourseEntity extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => UserEntity, (user) => user.purchasedCourses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user!: UserEntity;

  @Column()
  courseId!: number;

  @ManyToOne(() => CourseEntity, (course) => course.purchasedCourses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseId' })
  course!: CourseEntity;

  @Column({ default: false })
  isCompleted!: boolean;

  @Column({ type: 'timestamp' })
  date!: string;
}
