import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CourseLessonUpdateAdminDto {
  @IsOptional() @IsNumber() @ApiPropertyOptional() courseSectionId?: number;
  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  title?: string;
  @IsOptional() @IsString() @ApiPropertyOptional() content?: string;
  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  thumbnail?: string;
  @IsOptional()
  @IsString()
  @MaxLength(256)
  @ApiPropertyOptional()
  video?: string;
  @IsOptional() @IsNumber() @ApiPropertyOptional() order?: number;
  @IsOptional() @IsDateString() @ApiPropertyOptional() date?: string;
  @IsOptional() @IsBoolean() @ApiPropertyOptional() isFree?: boolean;
}
