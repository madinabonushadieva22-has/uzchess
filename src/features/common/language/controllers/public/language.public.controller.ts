import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LanguagePublicService } from '../../services/public/language.public.service';
import { LanguageListPublicDto } from '../../dtos/public/languageList.public.dto';


@ApiTags('Public / Languages')
@Controller('public/languages')
export class LanguagePublicController {
  constructor(private readonly languagePublicService: LanguagePublicService) {}

  @Get()
  @ApiOkResponse({ type: () => LanguageListPublicDto, isArray: true })
  getAll(): Promise<LanguageListPublicDto[]> {
    return this.languagePublicService.getAll();
  }
}
