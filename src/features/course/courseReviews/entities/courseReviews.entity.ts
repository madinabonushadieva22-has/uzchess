import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { UserEntity } from '../../../common/users/entities/user.entity';
import { CourseEntity } from '../../entities/courses.entity';


@Entity('courseReviews')
export class CourseReviewEntity extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => UserEntity, (user) => user.courseReviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user!: UserEntity;

  @Column()
  courseId!: number;

  @ManyToOne(() => CourseEntity, (course) => course.reviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseId' })
  course!: CourseEntity;

  @Column({ type: 'int' })
  rating!: number;

  @Column({ length: 512, nullable: true })
  comment?: string;

  @Column({ type: 'timestamp' })
  created!: string;
}
