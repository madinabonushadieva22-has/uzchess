import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { DifficultyListPublicDto } from '../../dtos/public/difficulty.list.public.dto';
import { DifficultyEntity } from '../../entities/difficulties.entity';


@Injectable()
export class DifficultiesPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<DifficultyListPublicDto[]> {
    const list = await DifficultyEntity.find({ order: { title: 'ASC' } });
    return plainToInstance(DifficultyListPublicDto, list, this.opts);
  }
}
