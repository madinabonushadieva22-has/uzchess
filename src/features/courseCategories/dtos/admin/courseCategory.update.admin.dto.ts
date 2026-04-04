import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CourseCategoryUpdateAdminDto {
  @IsOptional()
  @IsString()
  @MaxLength(64)
  @ApiPropertyOptional()
  title?: string;
}
