import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseLessonListAdminDto } from '../../dtos/admin/courseLesson.list.admin.dto';
import { CourseEntity } from '../../../entities/courses.entity';
import { CourseLessonEntity } from '../../entities/courseLessons.entity';
import { CourseLessonDetailAdminDto } from '../../dtos/admin/courseLesson.detail.admin.dto';
import { CourseLessonCreateAdminDto } from '../../dtos/admin/courseLesson.create.admin.dto';
import { CourseLessonUpdateAdminDto } from '../../dtos/admin/courseLesson.update.admin.dto';


@Injectable()
export class CourseLessonsAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAllByCourse(courseId: number): Promise<CourseLessonListAdminDto[]> {
    const course = await CourseEntity.findOneBy({ id: courseId });
    if (!course) throw new NotFoundException('Course with given id not found');
    const lessons = await CourseLessonEntity.find({
      where: { courseId },
      order: { order: 'ASC' },
    });
    return plainToInstance(CourseLessonListAdminDto, lessons, this.opts);
  }

  async getOne(id: number): Promise<CourseLessonDetailAdminDto> {
    const lesson = await CourseLessonEntity.findOneBy({ id });
    if (!lesson) throw new NotFoundException('Course lesson with given id not found');
    return plainToInstance(CourseLessonDetailAdminDto, lesson, this.opts);
  }

  async create(payload: CourseLessonCreateAdminDto): Promise<CourseLessonDetailAdminDto> {
    const course = await CourseEntity.findOneBy({ id: payload.courseId });
    if (!course) throw new NotFoundException('Course with given id not found');
    const lesson = CourseLessonEntity.create(payload as CourseLessonEntity);
    await CourseLessonEntity.save(lesson);
    course.lessonsCount += 1;
    await CourseEntity.save(course);
    return plainToInstance(CourseLessonDetailAdminDto, lesson, this.opts);
  }

  async update(id: number, payload: CourseLessonUpdateAdminDto): Promise<CourseLessonDetailAdminDto> {
    const lesson = await CourseLessonEntity.findOneBy({ id });
    if (!lesson) throw new NotFoundException('Course lesson with given id not found');
    Object.assign(
      lesson,
      Object.fromEntries(Object.entries(payload).filter(([_k, v]) => v !== undefined)),
    );
    await CourseLessonEntity.save(lesson);
    return plainToInstance(CourseLessonDetailAdminDto, lesson, this.opts);
  }

  async delete(id: number): Promise<void> {
    const lesson = await CourseLessonEntity.findOneBy({ id });
    if (!lesson) throw new NotFoundException('Course lesson with given id not found');
    await CourseLessonEntity.remove(lesson);
    const course = await CourseEntity.findOneBy({ id: lesson.courseId });
    if (course && course.lessonsCount > 0) {
      course.lessonsCount -= 1;
      await CourseEntity.save(course);
    }
  }
}