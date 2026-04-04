import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { LanguageListAdminDto } from '../../dtos/admin/languageList.admin.dto';
import { LanguageEntity } from '../../entities/language.entities';
import { LanguageCreateAdminDto } from '../../dtos/admin/language.create.admin.dto';
import { LanguageUpdateAdminDto } from '../../dtos/admin/language.update.admin.dto';


@Injectable()
export class LanguageAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<LanguageListAdminDto[]> {
    const list = await LanguageEntity.find({ order: { title: 'ASC' } });
    return plainToInstance(LanguageListAdminDto, list, this.opts);
  }

  async getOne(id: number): Promise<LanguageListAdminDto> {
    const language = await LanguageEntity.findOneBy({ id });
    if (!language)
      throw new NotFoundException('Language with given id not found');
    return plainToInstance(LanguageListAdminDto, language, this.opts);
  }

  async create(payload: LanguageCreateAdminDto): Promise<LanguageListAdminDto> {
    const language = LanguageEntity.create(payload as LanguageEntity);
    await LanguageEntity.save(language);
    return plainToInstance(LanguageListAdminDto, language, this.opts);
  }

  async update(
    id: number,
    payload: LanguageUpdateAdminDto,
  ): Promise<LanguageListAdminDto> {
    const language = await LanguageEntity.findOneBy({ id });
    if (!language)
      throw new NotFoundException('Language with given id not found');
    Object.assign(
      language,
      Object.fromEntries(
        Object.entries(payload).filter(([_k, v]) => v !== undefined),
      ),
    );
    await LanguageEntity.save(language);
    return plainToInstance(LanguageListAdminDto, language, this.opts);
  }

  async delete(id: number): Promise<void> {
    const language = await LanguageEntity.findOneBy({ id });
    if (!language)
      throw new NotFoundException('Language with given id not found');
    await LanguageEntity.remove(language);
  }
}
