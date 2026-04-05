import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class ReportCategoryUpdateAdminDto {
  @IsOptional()
  @IsString()
  @MaxLength(64)
  @ApiPropertyOptional()
  title?: string;
  @IsOptional() @IsNumber() @ApiPropertyOptional() order?: number;
}
