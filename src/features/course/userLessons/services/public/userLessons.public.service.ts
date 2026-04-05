import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UserLessonListPublicDto } from '../../dtos/public/userLesson.list.public.dto';
import { UserLessonEntity } from '../../entities/userLessons.entity';
import { UserLessonCreatePublicDto } from '../../dtos/public/userLesson.create.public.dto';
import { CourseLessonEntity } from '../../../courseLessons/entities/courseLessons.entity';


@Injectable()
export class UserLessonsPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getMyLessons(userId: number): Promise<UserLessonListPublicDto[]> {
    const lessons = await UserLessonEntity.find({ where: { userId } });
    return plainToInstance(UserLessonListPublicDto, lessons, this.opts);
  }

  async save(
    userId: number,
    payload: UserLessonCreatePublicDto,
  ): Promise<UserLessonListPublicDto> {
    const lesson = await CourseLessonEntity.findOneBy({
      id: payload.courseLessonId,
    });
    if (!lesson)
      throw new NotFoundException('Course lesson with given id not found');
    let userLesson = await UserLessonEntity.findOneBy({
      userId,
      courseLessonId: payload.courseLessonId,
    });
    if (!userLesson) {
      userLesson = UserLessonEntity.create({
        userId,
        ...payload,
      } as UserLessonEntity);
    } else {
      Object.assign(userLesson, payload);
    }
    await UserLessonEntity.save(userLesson);
    return plainToInstance(UserLessonListPublicDto, userLesson, this.opts);
  }
}
