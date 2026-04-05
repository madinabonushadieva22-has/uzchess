import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PlayerListPublicDto } from '../../dtos/public/player.list.public.dto';
import { PlayerEntity } from '../../entities/players.entity';


@Injectable()
export class PlayersPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<PlayerListPublicDto[]> {
    const players = await PlayerEntity.find({
      relations: ['country'],
      order: { fullName: 'ASC' },
    });
    return plainToInstance(PlayerListPublicDto, players, this.opts);
  }
}
