import { Injectable, NotFoundException } from '@nestjs/common';
import { News } from '../entities/news.entity';
import { NewsCreateAdminDto } from '../dtos/admin/news.create.admin.dto';
import { NewsUpdateAdminDto } from '../dtos/admin/news.update.admin.dto';
import { plainToInstance } from 'class-transformer';
import { NewsListAdminDto } from '../dtos/admin/news.list.admin.dto';
import { NewsDetailAdminDto } from '../dtos/admin/news.detail.admin.dto';
import { NewsListPublicDto } from '../dtos/public/news.list.public.dto';
import { NewsDetailPublicDto } from '../dtos/public/news.detail.public.dto';

@Injectable()
export class NewsService {

  async adminGetAll(): Promise<NewsListAdminDto[]> {
    const news = await News.find({ order: { date: 'DESC' } });
    return plainToInstance(NewsListAdminDto, news, {
      excludeExtraneousValues: true,
    });
  }

  async adminGetOne(id: number): Promise<NewsDetailAdminDto> {
    const news = await News.findOneBy({ id });
    if (!news) throw new NotFoundException('News with given id not found');
    return plainToInstance(NewsDetailAdminDto, news, {
      excludeExtraneousValues: true,
    });
  }

  async adminCreate(payload: NewsCreateAdminDto): Promise<NewsDetailAdminDto> {
    const news = News.create(payload as News);
    await News.save(news);
    return plainToInstance(NewsDetailAdminDto, news, {
      excludeExtraneousValues: true,
    });
  }

  async adminUpdate(
    id: number,
    payload: NewsUpdateAdminDto,
  ): Promise<NewsDetailAdminDto> {
    const news = await News.findOneBy({ id });
    if (!news) throw new NotFoundException('News with given id not found');

    Object.assign(
      news,
      Object.fromEntries(
        Object.entries(payload).filter(
          ([_key, value]) => value !== undefined && value !== null,
        ),
      ),
    );

    await News.save(news);
    return plainToInstance(NewsDetailAdminDto, news, {
      excludeExtraneousValues: true,
    });
  }

  async adminDelete(id: number): Promise<void> {
    const news = await News.findOneBy({ id });
    if (!news) throw new NotFoundException('News with given id not found');
    await News.remove(news);
  }


  async publicGetAll(): Promise<NewsListPublicDto[]> {
    const news = await News.find({ order: { date: 'DESC' } });
    return plainToInstance(NewsListPublicDto, news, {
      excludeExtraneousValues: true,
    });
  }

  async publicGetOne(id: number): Promise<NewsDetailPublicDto> {
    const news = await News.findOneBy({ id });
    if (!news) throw new NotFoundException('News with given id not found');
    return plainToInstance(NewsDetailPublicDto, news, {
      excludeExtraneousValues: true,
    });
  }
}
