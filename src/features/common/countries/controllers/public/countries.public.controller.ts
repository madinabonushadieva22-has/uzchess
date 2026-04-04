import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CountriesPublicService } from '../../services/public/countries.public.service';
import { CountryListPublicDto } from '../../dtos/public/country.list.public.dto';


@ApiTags('Public / Countries')
@Controller('public/countries')
export class CountriesPublicController {
  constructor(
    private readonly countriesPublicService: CountriesPublicService,
  ) {}

  @Get()
  @ApiOkResponse({ type: () => CountryListPublicDto, isArray: true })
  getAll(): Promise<CountryListPublicDto[]> {
    return this.countriesPublicService.getAll();
  }
}
