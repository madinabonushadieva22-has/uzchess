import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PurchasedCourseListAdminDto } from '../../dtos/admin/purchasedCourses.list.admin.dto';
import { PurchasedCourseEntity } from '../../entities/purchasedCourses.entity';


@Injectable()
export class PurchasedCoursesAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<PurchasedCourseListAdminDto[]> {
    const list = await PurchasedCourseEntity.find({
      relations: ['course'],
      order: { date: 'DESC' },
    });
    return plainToInstance(PurchasedCourseListAdminDto, list, this.opts);
  }

  async getByUser(userId: number): Promise<PurchasedCourseListAdminDto[]> {
    const list = await PurchasedCourseEntity.find({
      where: { userId },
      relations: ['course'],
      order: { date: 'DESC' },
    });
    return plainToInstance(PurchasedCourseListAdminDto, list, this.opts);
  }
}