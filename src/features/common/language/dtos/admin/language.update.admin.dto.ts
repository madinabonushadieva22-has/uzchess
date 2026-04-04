import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class LanguageUpdateAdminDto {
  @IsOptional()
  @IsString()
  @MaxLength(32)
  @ApiPropertyOptional()
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2)
  @ApiPropertyOptional()
  code?: string;
}
