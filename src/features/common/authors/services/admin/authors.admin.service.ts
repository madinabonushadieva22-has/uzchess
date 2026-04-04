import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { AuthorsListAdminDto } from '../../dtos/admin/authors.list.admin.dto';
import { AuthorEntity } from '../../entities/authors.entity';
import { AuthorsCreateAdminDto } from '../../dtos/admin/authors.create.admin.dto';
import { AuthorsUpdateAdminDto } from '../../dtos/admin/authors.update.admin.dto';


@Injectable()
export class AuthorsAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<AuthorsListAdminDto[]> {
    const authors = await AuthorEntity.find({ order: { fullName: 'ASC' } });
    return plainToInstance(AuthorsListAdminDto, authors, this.opts);
  }

  async getOne(id: number): Promise<AuthorsListAdminDto> {
    const author = await AuthorEntity.findOneBy({ id });
    if (!author) throw new NotFoundException('Author with given id not found');
    return plainToInstance(AuthorsListAdminDto, author, this.opts);
  }

  async create(payload: AuthorsCreateAdminDto): Promise<AuthorsListAdminDto> {
    const author = AuthorEntity.create(payload as AuthorEntity);
    await AuthorEntity.save(author);
    return plainToInstance(AuthorsListAdminDto, author, this.opts);
  }

  async update(
    id: number,
    payload: AuthorsUpdateAdminDto,
  ): Promise<AuthorsListAdminDto> {
    const author = await AuthorEntity.findOneBy({ id });
    if (!author) throw new NotFoundException('Author with given id not found');
    Object.assign(
      author,
      Object.fromEntries(
        Object.entries(payload).filter(([_k, v]) => v !== undefined),
      ),
    );
    await AuthorEntity.save(author);
    return plainToInstance(AuthorsListAdminDto, author, this.opts);
  }

  async delete(id: number): Promise<void> {
    const author = await AuthorEntity.findOneBy({ id });
    if (!author) throw new NotFoundException('Author with given id not found');
    await AuthorEntity.remove(author);
  }
}
