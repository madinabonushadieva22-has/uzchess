import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseLikeEntity } from '../../entities/courseLikes.entity';
import { CourseLikeListAdminDto } from '../../dtos/admin/courseLike.list.admin.dto';


@Injectable()
export class CourseLikesAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<CourseLikeListAdminDto[]> {
    const list = await CourseLikeEntity.find({ order: { createdAt: 'DESC' } });
    return plainToInstance(CourseLikeListAdminDto, list, this.opts);
  }
}
