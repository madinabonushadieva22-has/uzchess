import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CountryListAdminDto } from '../../dtos/admin/country.list.admin.dto';
import { CountryEntity } from '../../entities/countries.entity';
import { CountryCreateAdminDto } from '../../dtos/admin/country.create.admin.dto';
import { CountryUpdateAdminDto } from '../../dtos/admin/country.update.admin.dto';


@Injectable()
export class CountriesAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<CountryListAdminDto[]> {
    const countries = await CountryEntity.find({ order: { title: 'ASC' } });
    return plainToInstance(CountryListAdminDto, countries, this.opts);
  }

  async getOne(id: number): Promise<CountryListAdminDto> {
    const country = await CountryEntity.findOneBy({ id });
    if (!country)
      throw new NotFoundException('Country with given id not found');
    return plainToInstance(CountryListAdminDto, country, this.opts);
  }

  async create(payload: CountryCreateAdminDto): Promise<CountryListAdminDto> {
    const country = CountryEntity.create(payload as CountryEntity);
    await CountryEntity.save(country);
    return plainToInstance(CountryListAdminDto, country, this.opts);
  }

  async update(
    id: number,
    payload: CountryUpdateAdminDto,
  ): Promise<CountryListAdminDto> {
    const country = await CountryEntity.findOneBy({ id });
    if (!country)
      throw new NotFoundException('Country with given id not found');
    Object.assign(
      country,
      Object.fromEntries(
        Object.entries(payload).filter(([_k, v]) => v !== undefined),
      ),
    );
    await CountryEntity.save(country);
    return plainToInstance(CountryListAdminDto, country, this.opts);
  }

  async delete(id: number): Promise<void> {
    const country = await CountryEntity.findOneBy({ id });
    if (!country)
      throw new NotFoundException('Country with given id not found');
    await CountryEntity.remove(country);
  }
}
