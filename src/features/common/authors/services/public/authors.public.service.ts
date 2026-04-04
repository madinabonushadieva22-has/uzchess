import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { AuthorsListPublicDto } from '../../dtos/public/authors.list.public.dto';
import { AuthorEntity } from '../../entities/authors.entity';


@Injectable()
export class AuthorsPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<AuthorsListPublicDto[]> {
    const authors = await AuthorEntity.find({ order: { fullName: 'ASC' } });
    return plainToInstance(AuthorsListPublicDto, authors, this.opts);
  }
}
