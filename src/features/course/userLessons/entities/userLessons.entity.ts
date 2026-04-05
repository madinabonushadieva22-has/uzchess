import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { UserEntity } from '../../../common/users/entities/user.entity';
import { CourseLessonEntity } from '../../courseLessons/entities/courseLessons.entity';


@Entity('users_lessons')
export class UserLessonEntity extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => UserEntity, (user) => user.userLessons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user!: UserEntity;

  @Column()
  courseLessonId!: number;

  @ManyToOne(() => CourseLessonEntity, (lesson) => lesson.userLessons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseLessonId' })
  lesson!: CourseLessonEntity;

  @Column({ nullable: true })
  stoppedAt?: number;

  @Column({ default: false })
  isCompleted!: boolean;
}
