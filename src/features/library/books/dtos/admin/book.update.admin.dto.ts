import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class BookUpdateAdminDto {
  @IsOptional() @IsNumber() @ApiPropertyOptional() authorId?: number;
  @IsOptional() @IsNumber() @ApiPropertyOptional() categoryId?: number;
  @IsOptional() @IsNumber() @ApiPropertyOptional() languageId?: number;
  @IsOptional() @IsNumber() @ApiPropertyOptional() difficultyId?: number;
  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  title?: string;
  @IsOptional() @IsString() @ApiPropertyOptional() description?: string;
  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  image?: string;
  @IsOptional() @IsNumber() @Min(0) @ApiPropertyOptional() price?: number;
  @IsOptional() @IsNumber() @Min(0) @ApiPropertyOptional() newPrice?: number;
  @IsOptional() @IsNumber() @Min(1) @ApiPropertyOptional() pages?: number;
  @IsOptional() @IsDateString() @ApiPropertyOptional() pubDate?: string;
}
