import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseLessonListPublicDto } from '../../dtos/public/courseLesson.list.public.dto';
import { CourseLessonEntity } from '../../entities/courseLessons.entity';
import { CourseLessonDetailPublicDto } from '../../dtos/public/courseLesson.detail.public.dto';
import { CourseEntity } from '../../../courses/entities/courses.entity';

@Injectable()
export class CourseLessonsPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAllByCourse(courseId: number): Promise<CourseLessonListPublicDto[]> {
    const course = await CourseEntity.findOneBy({ id: courseId, isPublished: true });
    if (!course) throw new NotFoundException('Course with given id not found');
    const lessons = await CourseLessonEntity.find({
      where: { courseId },
      order: { order: 'ASC' },
    });
    return plainToInstance(CourseLessonListPublicDto, lessons, this.opts);
  }

  async getOne(id: number): Promise<CourseLessonDetailPublicDto> {
    const lesson = await CourseLessonEntity.findOneBy({ id });
    if (!lesson) throw new NotFoundException('Course lesson with given id not found');
    return plainToInstance(CourseLessonDetailPublicDto, lesson, this.opts);
  }
}