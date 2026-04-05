import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CourseUpdateAdminDto {
  @IsOptional() @IsNumber() @ApiPropertyOptional() authorId?: number;
  @IsOptional() @IsNumber() @ApiPropertyOptional() categoryId?: number;
  @IsOptional() @IsNumber() @ApiPropertyOptional() languageId?: number;
  @IsOptional() @IsNumber() @ApiPropertyOptional() difficultyId?: number;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  image?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiPropertyOptional()
  price?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiPropertyOptional()
  newPrice?: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  isPublished?: boolean;
}
