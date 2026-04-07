import {Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post} from "@nestjs/common";
import { ApiOkResponse } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { NewsListAdminDto } from '../dtos/admin/news.list.admin.dto';
import { News } from '../entities/news.entity';
import { NewsDetailAdminDto } from '../dtos/admin/news.detail.admin.dto';
import { NewsCreateAdminDto } from '../dtos/admin/news.create.admin.dto';
import { NewsUpdateAdminDto } from '../dtos/admin/news.update.admin.dto';


@Controller('admin/news')
export class NewsAdminController {
  @Get()
  @ApiOkResponse({type:() => NewsListAdminDto, isArray: true })
  async getAll() {
    const news = await News.find();
    return plainToInstance(NewsListAdminDto, news, {excludeExtraneousValues: true});
  }
  @Get(':id')
  @ApiOkResponse({type: ()=> NewsDetailAdminDto })
  async getOne(@Param('id') id: number) {
    const news = await News.findOneBy({ id: id });
    if (!news) {
      throw new NotFoundException('News with given id not found');
    }
    return news;
  }
  @Post()
  async create(@Body() payload: NewsCreateAdminDto){
    const news = News.create(payload as News);
    news.createdAt = (new Date()).toISOString();
    await News.save(news);
    return news;
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() payload: NewsUpdateAdminDto){
    const news = await News.findOneBy({ id: id });
    if (!news) {
      throw new NotFoundException('News with given id not found');
    }


    Object.assign(
      news,
      Object.fromEntries(
        Object.entries(payload).filter(([key,value]) => value),
      ),
    );


    await News.save(news);
    return news;

  }


  @Delete(':id')
  async delete(@Param('id') id:number) {
    //await News.delete({id: id});

    const news = await News.findOneBy({ id: id });
    if (!news) {
      throw new NotFoundException('News with given id not found');
    }

    await News.remove(news);


  }


}

