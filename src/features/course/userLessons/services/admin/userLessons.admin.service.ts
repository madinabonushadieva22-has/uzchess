import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UserLessonListPublicDto } from '../../dtos/public/userLesson.list.public.dto';
import { UserLessonEntity } from '../../entities/userLessons.entity';


@Injectable()
export class UserLessonsAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getByUser(userId: number): Promise<UserLessonListPublicDto[]> {
    const lessons = await UserLessonEntity.find({ where: { userId } });
    return plainToInstance(UserLessonListPublicDto, lessons, this.opts);
  }
}