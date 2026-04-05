import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookLikeListAdminDto } from '../../dtos/admin/bookLike.list.admin.dto';
import { BookLikeEntity } from '../../entities/bookLikes.entity';


@Injectable()
export class BookLikesAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<BookLikeListAdminDto[]> {
    const list = await BookLikeEntity.find({ order: { created: 'DESC' } });
    return plainToInstance(BookLikeListAdminDto, list, this.opts);
  }
}
