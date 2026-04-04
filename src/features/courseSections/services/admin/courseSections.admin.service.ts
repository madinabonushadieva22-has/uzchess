import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseSectionEntity } from '../enitities/courseSections.entity';
import { CourseSectionCreateAdminDto } from '../dtos/admin/courseSection.create.admin.dto';
import { CourseSectionUpdateAdminDto } from '../dtos/admin/courseSection.update.admin.dto';
import { CourseSectionListAdminDto } from '../dtos/admin/courseSection.list.admin.dto';
import { CourseEntity } from '../../courses/enitities/courses.entity';

@Injectable()
export class CourseSectionsAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAllByCourse(courseId: number): Promise<CourseSectionListAdminDto[]> {
    const course = await CourseEntity.findOneBy({ id: courseId });
    if (!course) throw new NotFoundException('Course with given id not found');
    const sections = await CourseSectionEntity.find({
      where: { courseId },
      order: { order: 'ASC' },
    });
    return plainToInstance(CourseSectionListAdminDto, sections, this.opts);
  }

  async create(
    payload: CourseSectionCreateAdminDto,
  ): Promise<CourseSectionListAdminDto> {
    const course = await CourseEntity.findOneBy({ id: payload.courseId });
    if (!course) throw new NotFoundException('Course with given id not found');
    const section = CourseSectionEntity.create(payload as CourseSectionEntity);
    await CourseSectionEntity.save(section);
    course.sectionsCount += 1;
    await CourseEntity.save(course);
    return plainToInstance(CourseSectionListAdminDto, section, this.opts);
  }

  async update(
    id: number,
    payload: CourseSectionUpdateAdminDto,
  ): Promise<CourseSectionListAdminDto> {
    const section = await CourseSectionEntity.findOneBy({ id });
    if (!section)
      throw new NotFoundException('Course section with given id not found');
    Object.assign(
      section,
      Object.fromEntries(
        Object.entries(payload).filter(([_k, v]) => v !== undefined),
      ),
    );
    await CourseSectionEntity.save(section);
    return plainToInstance(CourseSectionListAdminDto, section, this.opts);
  }

  async delete(id: number): Promise<void> {
    const section = await CourseSectionEntity.findOneBy({ id });
    if (!section)
      throw new NotFoundException('Course section with given id not found');
    await CourseSectionEntity.remove(section);
    const course = await CourseEntity.findOneBy({ id: section.courseId });
    if (course && course.sectionsCount > 0) {
      course.sectionsCount -= 1;
      await CourseEntity.save(course);
    }
  }
}
