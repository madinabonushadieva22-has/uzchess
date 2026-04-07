import  { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { AuthorEntity } from '../../../common/authors/entities/authors.entity';
import { CourseCategoryEntity } from '../../courseCategories/entities/courseCategories.entity';
import { LanguageEntity } from '../../../common/language/entities/language.entity';
import { DifficultyEntity } from '../../../common/difficulties/entities/difficulties.entity';
import { CourseSectionEntity } from '../../courseSections/entities/courseSections.entity';
import { CourseLessonEntity } from '../../courseLessons/entities/courseLessons.entity';
import { PurchasedCourseEntity } from '../../purchasedCourses/entities/purchasedCourses.entity';
import { CourseLikeEntity } from '../../courseLikes/entities/courseLikes.entity';
import { CourseReviewEntity } from '../../courseReviews/entities/courseReviews.entity';


@Entity('courses')
export class CourseEntity extends BaseModel {
  @Column()
  authorId!: number;

  @ManyToOne(() => AuthorEntity, (author) => author.courses, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'authorId' })
  author!: AuthorEntity;

  @Column()
  categoryId!: number;

  @ManyToOne(() => CourseCategoryEntity, (cat) => cat.courses, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'categoryId' })
  category!: CourseCategoryEntity;

  @Column()
  languageId!: number;

  @ManyToOne(() => LanguageEntity, (lang) => lang.courses, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'languageId' })
  language!: LanguageEntity;

  @Column()
  difficultyId!: number;

  @ManyToOne(() => DifficultyEntity, (diff) => diff.courses, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'difficultyId' })
  difficulty!: DifficultyEntity;

  @Column({ length: 128 })
  title!: string;

  @Column({ length: 128 })
  image!: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price!: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  newPrice?: number;

  @Column({ default: false })
  isPublished!: boolean;

  @Column({ default: 0 })
  reviewsCount!: number;

  @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
  rating?: number;

  @Column({ default: 0 })
  sectionsCount!: number;

  @Column({ default: 0 })
  lessonsCount!: number;

  @OneToMany(() => CourseSectionEntity, (section) => section.course)
  sections!: CourseSectionEntity[];

  @OneToMany(() => CourseLessonEntity, (lesson) => lesson.course)
  lessons!: CourseLessonEntity[];

  @OneToMany(() => PurchasedCourseEntity, (pc) => pc.course)
  purchasedCourses!: PurchasedCourseEntity[];

  @OneToMany(() => CourseLikeEntity, (cl) => cl.course)
  likes!: CourseLikeEntity[];

  @OneToMany(() => CourseReviewEntity, (cr) => cr.course)
  reviews!: CourseReviewEntity[];
}
