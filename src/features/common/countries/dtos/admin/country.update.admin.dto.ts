import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CountryUpdateAdminDto {
  @IsOptional()
  @IsString()
  @MaxLength(64)
  @ApiPropertyOptional({ example: 'Uzbekistan' })
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional({ example: 'flags/uz.png' })
  flag?: string;
}
