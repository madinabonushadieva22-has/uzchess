import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CourseLikeCreatePublicDto } from '../../dtos/public/courseLike.create.public.dto';
import { CourseLikeEntity } from '../../entities/courseLikes.entity';
import { CourseEntity } from '../../../courses/entities/courses.entity';


@Injectable()
export class CourseLikesPublicService {
  async toggle(
    userId: number,
    payload: CourseLikeCreatePublicDto,
  ): Promise<{ liked: boolean }> {
    const course = await CourseEntity.findOneBy({
      id: payload.courseId,
      isPublished: true,
    });
    if (!course) throw new NotFoundException('Course with given id not found');
    const existing = await CourseLikeEntity.findOneBy({
      userId,
      courseId: payload.courseId,
    });
    if (existing) {
      await CourseLikeEntity.remove(existing);
      return { liked: false };
    }
    const like = CourseLikeEntity.create({
      userId,
      courseId: payload.courseId,
    } as CourseLikeEntity);
    await CourseLikeEntity.save(like);
    return { liked: true };
  }
}
