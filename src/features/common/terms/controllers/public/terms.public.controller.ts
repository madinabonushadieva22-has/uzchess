import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TermsPublicService } from '../../services/public/terms.public.service';
import { TermsDetailDto } from '../../dtos/admin/terms.detail.dto';


@ApiTags('Public / Terms')
@Controller('public/terms')
export class TermsPublicController {
  constructor(private readonly termsPublicService: TermsPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => TermsDetailDto })
  get(): Promise<TermsDetailDto> {
    return this.termsPublicService.get();
  }
}
