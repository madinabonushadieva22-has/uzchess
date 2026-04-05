import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MatchListPublicDto } from '../../dtos/public/match.list.public.dto';
import { MatchEntity } from '../../entities/matches.entity';


@Injectable()
export class MatchesPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<MatchListPublicDto[]> {
    const matches = await MatchEntity.find({
      relations: ['firstPlayer', 'secondPlayer'],
      order: { date: 'DESC' },
    });
    return plainToInstance(MatchListPublicDto, matches, this.opts);
  }
}
