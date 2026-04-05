import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { UserEntity } from 'src/features/common/users/entities/user.entity';
import { CourseEntity } from '../../courses/entities/courses.entity';

@Entity('courseLikes')
export class CourseLikeEntity extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => UserEntity, (user) => user.courseLikes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user!: UserEntity;

  @Column()
  courseId!: number;

  @ManyToOne(() => CourseEntity, (course) => course.likes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course!: CourseEntity;
}