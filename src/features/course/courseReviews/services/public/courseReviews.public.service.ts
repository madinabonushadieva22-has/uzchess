import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseReviewListPublicDto } from '../../dtos/public/courseReview.list.public.dto';
import { CourseReviewEntity } from '../../entities/courseReviews.entity';
import { CourseReviewCreatePublicDto } from '../../dtos/public/courseReview.create.public.dto';
import { CourseEntity } from '../../../courses/entities/courses.entity';

@Injectable()
export class CourseReviewsPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getByCourse(courseId: number): Promise<CourseReviewListPublicDto[]> {
    const list = await CourseReviewEntity.find({
      where: { courseId },
      order: { created: 'DESC' },
    });
    return plainToInstance(CourseReviewListPublicDto, list, this.opts);
  }

  async create(
    userId: number,
    payload: CourseReviewCreatePublicDto,
  ): Promise<CourseReviewListPublicDto> {
    const course = await CourseEntity.findOneBy({
      id: payload.courseId,
      isPublished: true,
    });
    if (!course) throw new NotFoundException('Course with given id not found');
    const existing = await CourseReviewEntity.findOneBy({
      userId,
      courseId: payload.courseId,
    });
    if (existing)
      throw new ConflictException('You already reviewed this course');
    const review = CourseReviewEntity.create({
      userId,
      courseId: payload.courseId,
      rating: payload.rating,
      comment: payload.comment,
      created: new Date().toISOString(),
    } as CourseReviewEntity);
    await CourseReviewEntity.save(review);
    course.reviewsCount += 1;
    await CourseEntity.save(course);
    return plainToInstance(CourseReviewListPublicDto, review, this.opts);
  }
}
