import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UsersDetailPublicDto } from '../../dtos/public/users.detail.public.dto';
import { UserEntity } from '../../entities/users.entity';


@Injectable()
export class UsersPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getOne(id: number): Promise<UsersDetailPublicDto> {
    const user = await UserEntity.findOneBy({ id });
    if (!user) throw new NotFoundException('User with given id not found');
    return plainToInstance(UsersDetailPublicDto, user, this.opts);
  }
}