import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class AuthorsUpdateAdminDto {
  @IsOptional()
  @IsString()
  @MaxLength(64)
  @ApiPropertyOptional({ example: 'Abdulla Qodiriy' })
  fullName?: string;
}
