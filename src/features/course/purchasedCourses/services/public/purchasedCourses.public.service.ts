import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PurchasedCourseListPublicDto } from '../../dtos/public/purchasedCourses.list.public.dto';
import { PurchasedCourseEntity } from '../../entities/purchasedCourses.entity';
import { PurchasedCourseCreatePublicDto } from '../../dtos/public/purchasedCourses.create.public.dto';
import { CourseEntity } from '../../../courses/entities/courses.entity';


@Injectable()
export class PurchasedCoursesPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getMyCourses(userId: number): Promise<PurchasedCourseListPublicDto[]> {
    const list = await PurchasedCourseEntity.find({
      where: { userId },
      relations: ['course'],
      order: { date: 'DESC' },
    });
    return plainToInstance(PurchasedCourseListPublicDto, list, this.opts);
  }

  async purchase(
    userId: number,
    payload: PurchasedCourseCreatePublicDto,
  ): Promise<PurchasedCourseListPublicDto> {
    const course = await CourseEntity.findOneBy({
      id: payload.courseId,
      isPublished: true,
    });
    if (!course) throw new NotFoundException('Course with given id not found');
    const existing = await PurchasedCourseEntity.findOneBy({
      userId,
      courseId: payload.courseId,
    });
    if (existing) throw new ConflictException('Course already purchased');
    const purchased = PurchasedCourseEntity.create({
      userId,
      courseId: payload.courseId,
      date: new Date().toISOString(),
    } as PurchasedCourseEntity);
    await PurchasedCourseEntity.save(purchased);
    const saved = await PurchasedCourseEntity.findOne({
      where: { id: purchased.id },
      relations: ['course'],
    });
    return plainToInstance(PurchasedCourseListPublicDto, saved, this.opts);
  }
}
