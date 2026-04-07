import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class AuthorsUpdateAdminDto {
  @IsOptional()
  @IsString()
  @MaxLength(64)
  @ApiPropertyOptional()
  fullName?: string;
}
