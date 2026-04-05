import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsViewRegisterPublicDto } from '../../dtos/public/newsView.register.public.dto';
import { News } from 'src/features/news/entities/news.entity';
import { NewsViewEntity } from '../../entities/newViews.entity';


@Injectable()
export class NewsViewsPublicService {
  async register(
    userId: number,
    payload: NewsViewRegisterPublicDto,
  ): Promise<{ message: string }> {
    const news = await News.findOneBy({ id: payload.newsId });
    if (!news) throw new NotFoundException('News with given id not found');

    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const existing = await NewsViewEntity.findOneBy({
      userId,
      newsId: payload.newsId,
    });

    if (!existing) {
      const view = NewsViewEntity.create({
        userId,
        newsId: payload.newsId,
        firstDate: new Date().toISOString(),
        lastDate: new Date().toISOString(),
        count: 1,
      } as NewsViewEntity);
      await NewsViewEntity.save(view);
    } else if (existing.lastDate < oneHourAgo) {
      existing.lastDate = new Date().toISOString();
      existing.count += 1;
      await NewsViewEntity.save(existing);
    }

    return { message: 'View registered' };
  }
}
