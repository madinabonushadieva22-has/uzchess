import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { LanguageListPublicDto } from '../../dtos/public/languageList.public.dto';
import { LanguageEntity } from '../../entities/language.entity';


@Injectable()
export class LanguagePublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<LanguageListPublicDto[]> {
    const list = await LanguageEntity.find({ order: { title: 'ASC' } });
    return plainToInstance(LanguageListPublicDto, list, this.opts);
  }
}
