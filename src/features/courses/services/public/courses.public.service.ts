import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseEntity } from '../enitities/courses.entity';
import { CourseListPublicDto } from '../dtos/public/course.list.public.dto';
import { CourseDetailPublicDto } from '../dtos/public/course.detail.public.dto';

@Injectable()
export class CoursesPublicService {
  private readonly opts = { excludeExtraneousValues: true };
  private readonly relations = ['author', 'category', 'language', 'difficulty'];

  async getAll(): Promise<CourseListPublicDto[]> {
    const courses = await CourseEntity.find({
      where: { isPublished: true },
      relations: ['author', 'category'],
      order: { createdAt: 'DESC' },
    });
    return plainToInstance(CourseListPublicDto, courses, this.opts);
  }

  async getOne(id: number): Promise<CourseDetailPublicDto> {
    const course = await CourseEntity.findOne({
      where: { id, isPublished: true },
      relations: this.relations,
    });
    if (!course) throw new NotFoundException('Course with given id not found');
    return plainToInstance(CourseDetailPublicDto, course, this.opts);
  }
}
