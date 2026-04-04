import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseEntity } from '../enitities/courses.entity';
import { CourseCreateAdminDto } from '../dtos/admin/course.create.admin.dto';
import { CourseUpdateAdminDto } from '../dtos/admin/course.update.admin.dto';
import { CourseListAdminDto } from '../dtos/admin/course.list.admin.dto';
import { CourseDetailAdminDto } from '../dtos/admin/course.detail.admin.dto';

@Injectable()
export class CoursesAdminService {
  private readonly opts = { excludeExtraneousValues: true };
  private readonly relations = ['author', 'category', 'language', 'difficulty'];

  async getAll(): Promise<CourseListAdminDto[]> {
    const courses = await CourseEntity.find({
      relations: ['author', 'category'],
      order: { createdAt: 'DESC' },
    });
    return plainToInstance(CourseListAdminDto, courses, this.opts);
  }

  async getOne(id: number): Promise<CourseDetailAdminDto> {
    const course = await CourseEntity.findOne({
      where: { id },
      relations: this.relations,
    });
    if (!course) throw new NotFoundException('Course with given id not found');
    return plainToInstance(CourseDetailAdminDto, course, this.opts);
  }

  async create(payload: CourseCreateAdminDto): Promise<CourseDetailAdminDto> {
    const course = CourseEntity.create(payload as CourseEntity);
    await CourseEntity.save(course);
    const saved = await CourseEntity.findOne({
      where: { id: course.id },
      relations: this.relations,
    });
    return plainToInstance(CourseDetailAdminDto, saved, this.opts);
  }

  async update(
    id: number,
    payload: CourseUpdateAdminDto,
  ): Promise<CourseDetailAdminDto> {
    const course = await CourseEntity.findOneBy({ id });
    if (!course) throw new NotFoundException('Course with given id not found');
    Object.assign(
      course,
      Object.fromEntries(
        Object.entries(payload).filter(([_k, v]) => v !== undefined),
      ),
    );
    await CourseEntity.save(course);
    const saved = await CourseEntity.findOne({
      where: { id },
      relations: this.relations,
    });
    return plainToInstance(CourseDetailAdminDto, saved, this.opts);
  }

  async delete(id: number): Promise<void> {
    const course = await CourseEntity.findOneBy({ id });
    if (!course) throw new NotFoundException('Course with given id not found');
    await CourseEntity.remove(course);
  }
}
