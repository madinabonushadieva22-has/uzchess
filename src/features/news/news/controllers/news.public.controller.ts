import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { News } from '../../entities/news.entity';
import { plainToInstance } from 'class-transformer';
import { NewsListPublicDto } from '../../dtos/public/news.list.public.dto';
import { NewsDetailPublicDto } from '../../dtos/public/news.detail.public.dto';

@Controller('public/news')
export class NewsPublicController {
  @Get()
  @ApiOkResponse({ type: () => NewsListPublicDto, isArray: true })
  async getAll() {
    const news = await News.find();
    return plainToInstance(NewsListPublicDto, news, {
      excludeExtraneousValues: true,
    });
  }
  @Get(':id')
  @ApiOkResponse({ type: () => NewsDetailPublicDto })
  async getOne(@Param('id') id: number) {
    const news = await News.findOneBy({ id: id });
    if (!news) {
      throw new NotFoundException('News with given id not found');
    }
    return news;
  }
}