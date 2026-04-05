import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MatchListAdminDto } from '../../dtos/admin/match.list.admin.dto';
import { MatchEntity } from '../../entities/matches.entity';
import { MatchCreateAdminDto } from '../../dtos/admin/match.create.admin.dto';
import { MatchUpdateAdminDto } from '../../dtos/admin/match.update.admin.dto';

@Injectable()
export class MatchesAdminService {
  private readonly opts = { excludeExtraneousValues: true };
  private readonly relations = ['firstPlayer', 'secondPlayer'];

  async getAll(): Promise<MatchListAdminDto[]> {
    const matches = await MatchEntity.find({ relations: this.relations, order: { date: 'DESC' } });
    return plainToInstance(MatchListAdminDto, matches, this.opts);
  }

  async getOne(id: number): Promise<MatchListAdminDto> {
    const match = await MatchEntity.findOne({ where: { id }, relations: this.relations });
    if (!match) throw new NotFoundException('Match with given id not found');
    return plainToInstance(MatchListAdminDto, match, this.opts);
  }

  async create(payload: MatchCreateAdminDto): Promise<MatchListAdminDto> {
    const match = MatchEntity.create(payload as MatchEntity);
    await MatchEntity.save(match);
    const saved = await MatchEntity.findOne({ where: { id: match.id }, relations: this.relations });
    return plainToInstance(MatchListAdminDto, saved, this.opts);
  }

  async update(id: number, payload: MatchUpdateAdminDto): Promise<MatchListAdminDto> {
    const match = await MatchEntity.findOneBy({ id });
    if (!match) throw new NotFoundException('Match with given id not found');
    Object.assign(match, Object.fromEntries(Object.entries(payload).filter(([_k, v]) => v !== undefined)));
    await MatchEntity.save(match);
    const saved = await MatchEntity.findOne({ where: { id }, relations: this.relations });
    return plainToInstance(MatchListAdminDto, saved, this.opts);
  }

  async delete(id: number): Promise<void> {
    const match = await MatchEntity.findOneBy({ id });
    if (!match) throw new NotFoundException('Match with given id not found');
    await MatchEntity.remove(match);
  }
}