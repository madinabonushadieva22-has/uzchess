import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CourseSectionUpdateAdminDto {
  @IsOptional() @IsString() @MaxLength(256) @ApiPropertyOptional() title?: string;
  @IsOptional() @IsNumber() @ApiPropertyOptional() order?: number;
  @IsOptional() @IsDateString() @ApiPropertyOptional() date?: string;
}