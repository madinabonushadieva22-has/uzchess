import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthorsPublicService } from '../../services/public/authors.public.service';
import { AuthorsListPublicDto } from '../../dtos/public/authors.list.public.dto';


@ApiTags('Public / Authors')
@Controller('public/authors')
export class AuthorsPublicController {
  constructor(private readonly authorsPublicService: AuthorsPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => AuthorsListPublicDto, isArray: true })
  getAll(): Promise<AuthorsListPublicDto[]> {
    return this.authorsPublicService.getAll();
  }
}
