import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseSectionEntity } from '../enitities/courseSections.entity';
import { CourseSectionListPublicDto } from '../dtos/public/courseSection.list.public.dto';
import { CourseEntity } from '../../courses/enitities/courses.entity';

@Injectable()
export class CourseSectionsPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAllByCourse(
    courseId: number,
  ): Promise<CourseSectionListPublicDto[]> {
    const course = await CourseEntity.findOneBy({
      id: courseId,
      isPublished: true,
    });
    if (!course) throw new NotFoundException('Course with given id not found');
    const sections = await CourseSectionEntity.find({
      where: { courseId },
      order: { order: 'ASC' },
    });
    return plainToInstance(CourseSectionListPublicDto, sections, this.opts);
  }
}
