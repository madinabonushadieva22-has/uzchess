import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PlayerListAdminDto } from '../../dtos/admin/player.list.admin.dto';
import { PlayerEntity } from '../../entities/players.entity';
import { PlayerCreateAdminDto } from '../../dtos/admin/player.create.admin.dto';
import { PlayerUpdateAdminDto } from '../../dtos/admin/player.update.admin.dto';


@Injectable()
export class PlayersAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<PlayerListAdminDto[]> {
    const players = await PlayerEntity.find({
      relations: ['country'],
      order: { fullName: 'ASC' },
    });
    return plainToInstance(PlayerListAdminDto, players, this.opts);
  }

  async getOne(id: number): Promise<PlayerListAdminDto> {
    const player = await PlayerEntity.findOne({
      where: { id },
      relations: ['country'],
    });
    if (!player) throw new NotFoundException('Player with given id not found');
    return plainToInstance(PlayerListAdminDto, player, this.opts);
  }

  async create(payload: PlayerCreateAdminDto): Promise<PlayerListAdminDto> {
    const player = PlayerEntity.create(payload as PlayerEntity);
    await PlayerEntity.save(player);
    const saved = await PlayerEntity.findOne({
      where: { id: player.id },
      relations: ['country'],
    });
    return plainToInstance(PlayerListAdminDto, saved, this.opts);
  }

  async update(
    id: number,
    payload: PlayerUpdateAdminDto,
  ): Promise<PlayerListAdminDto> {
    const player = await PlayerEntity.findOneBy({ id });
    if (!player) throw new NotFoundException('Player with given id not found');
    Object.assign(
      player,
      Object.fromEntries(
        Object.entries(payload).filter(([_k, v]) => v !== undefined),
      ),
    );
    await PlayerEntity.save(player);
    const saved = await PlayerEntity.findOne({
      where: { id },
      relations: ['country'],
    });
    return plainToInstance(PlayerListAdminDto, saved, this.opts);
  }

  async delete(id: number): Promise<void> {
    const player = await PlayerEntity.findOneBy({ id });
    if (!player) throw new NotFoundException('Player with given id not found');
    await PlayerEntity.remove(player);
  }
}
