import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { DifficultyListAdminDto } from '../../dtos/admin/difficulty.list.admin.dto';
import { DifficultyEntity } from '../../entities/difficulties.entity';
import { DifficultyCreateAdminDto } from '../../dtos/admin/difficulty.create.admin.dto';
import { DifficultyUpdateAdminDto } from '../../dtos/admin/difficulty.update.admin.dto';


@Injectable()
export class DifficultiesAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<DifficultyListAdminDto[]> {
    const list = await DifficultyEntity.find({ order: { title: 'ASC' } });
    return plainToInstance(DifficultyListAdminDto, list, this.opts);
  }

  async getOne(id: number): Promise<DifficultyListAdminDto> {
    const difficulty = await DifficultyEntity.findOneBy({ id });
    if (!difficulty)
      throw new NotFoundException('Difficulty with given id not found');
    return plainToInstance(DifficultyListAdminDto, difficulty, this.opts);
  }

  async create(
    payload: DifficultyCreateAdminDto,
  ): Promise<DifficultyListAdminDto> {
    const difficulty = DifficultyEntity.create(payload as DifficultyEntity);
    await DifficultyEntity.save(difficulty);
    return plainToInstance(DifficultyListAdminDto, difficulty, this.opts);
  }

  async update(
    id: number,
    payload: DifficultyUpdateAdminDto,
  ): Promise<DifficultyListAdminDto> {
    const difficulty = await DifficultyEntity.findOneBy({ id });
    if (!difficulty)
      throw new NotFoundException('Difficulty with given id not found');
    Object.assign(
      difficulty,
      Object.fromEntries(
        Object.entries(payload).filter(([_k, v]) => v !== undefined),
      ),
    );
    await DifficultyEntity.save(difficulty);
    return plainToInstance(DifficultyListAdminDto, difficulty, this.opts);
  }

  async delete(id: number): Promise<void> {
    const difficulty = await DifficultyEntity.findOneBy({ id });
    if (!difficulty)
      throw new NotFoundException('Difficulty with given id not found');
    await DifficultyEntity.remove(difficulty);
  }
}
