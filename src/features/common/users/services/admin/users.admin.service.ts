import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UserListAdminDto } from '../../dtos/admin/users.list.admin.dto';
import { UserEntity } from '../../entities/user.entity';
import { UserUpdateAdminDto } from '../../dtos/admin/user.update.admin.dto';


@Injectable()
export class UsersAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<UserListAdminDto[]> {
    const users = await UserEntity.find({ order: { createdAt: 'DESC' } });
    return plainToInstance(UserListAdminDto, users, this.opts);
  }

  async getOne(id: number): Promise<UserListAdminDto> {
    const user = await UserEntity.findOneBy({ id });
    if (!user) throw new NotFoundException('User with given id not found');
    return plainToInstance(UserListAdminDto, user, this.opts);
  }

  async update(
    id: number,
    payload: UserUpdateAdminDto,
  ): Promise<UserListAdminDto> {
    const user = await UserEntity.findOneBy({ id });
    if (!user) throw new NotFoundException('User with given id not found');
    Object.assign(
      user,
      Object.fromEntries(
        Object.entries(payload).filter(([_k, v]) => v !== undefined),
      ),
    );
    await UserEntity.save(user);
    return plainToInstance(UserListAdminDto, user, this.opts);
  }

  async delete(id: number): Promise<void> {
    const user = await UserEntity.findOneBy({ id });
    if (!user) throw new NotFoundException('User with given id not found');
    await UserEntity.remove(user);
  }
}
