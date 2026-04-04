import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CountryListPublicDto } from '../../dtos/public/country.list.public.dto';
import { CountryEntity } from '../../entities/countries.entity';

@Injectable()
export class CountriesPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<CountryListPublicDto[]> {
    const countries = await CountryEntity.find({ order: { title: 'ASC' } });
    return plainToInstance(CountryListPublicDto, countries, this.opts);
  }
}
