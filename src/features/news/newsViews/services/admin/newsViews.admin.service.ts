import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { NewsViewListAdminDto } from '../../dtos/admin/newsView.list.admin.dto';
import { NewsViewEntity } from '../../entities/newViews.entity';


@Injectable()
export class NewsViewsAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<NewsViewListAdminDto[]> {
    const list = await NewsViewEntity.find({ order: { lastDate: 'DESC' } });
    return plainToInstance(NewsViewListAdminDto, list, this.opts);
  }

  async getByNews(newsId: number): Promise<NewsViewListAdminDto[]> {
    const list = await NewsViewEntity.find({
      where: { newsId },
      order: { lastDate: 'DESC' },
    });
    return plainToInstance(NewsViewListAdminDto, list, this.opts);
  }
}
