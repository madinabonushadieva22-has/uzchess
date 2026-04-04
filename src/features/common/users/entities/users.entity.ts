
import { Column, Entity, OneToMany } from 'typeorm';

import { BaseModel } from '../../../../core/base-model';
import { LoginType, UserRole } from '../../../../core/enums';

@Entity('users')
export class UserEntity extends BaseModel {
  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role!: UserRole;

  @Column({ length: 64 })
  fullName!: string;

  @Column({ length: 128, nullable: true })
  profileImage?: string;

  @Column({ length: 64, unique: true })
  login!: string;

  @Column({ type: 'enum', enum: LoginType })
  loginType!: LoginType;

  @Column({ length: 128, nullable: true })
  password?: string;

  @Column({ type: 'date', nullable: true })
  birthDate?: string;

  @Column({ default: false })
  isVerified!: boolean;

  @Column({ default: false })
  isActive!: boolean;

  @OneToMany(() => OtpCodeEntity, (otp) => otp.user)
  otpCodes!: OtpCodeEntity[];

  @OneToMany(() => PurchasedCourseEntity, (pc) => pc.user)
  purchasedCourses!: PurchasedCourseEntity[];

  @OneToMany(() => CourseLikeEntity, (cl) => cl.user)
  courseLikes!: CourseLikeEntity[];

  @OneToMany(() => CourseReviewEntity, (cr) => cr.user)
  courseReviews!: CourseReviewEntity[];

  @OneToMany(() => UserLessonEntity, (ul) => ul.user)
  userLessons!: UserLessonEntity[];

  @OneToMany(() => BookLikeEntity, (bl) => bl.user)
  bookLikes!: BookLikeEntity[];

  @OneToMany(() => BookReviewEntity, (br) => br.user)
  bookReviews!: BookReviewEntity[];

  @OneToMany(() => NewsViewEntity, (nv) => nv.user)
  newsViews!: NewsViewEntity[];

  @OneToMany(() => ReportEntity, (r) => r.user)
  reports!: ReportEntity[];
}
