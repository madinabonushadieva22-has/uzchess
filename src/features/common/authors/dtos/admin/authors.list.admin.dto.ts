import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class AuthorsListAdminDto {
  @Expose()
  @ApiProperty()
  id!: number;


  @Expose()
  @ApiProperty()
  fullName!: string;

  @Expose()
  @ApiProperty()
  createdAt!: string;

  @Expose()
  @ApiProperty()
  updatedAt?: string;
}
