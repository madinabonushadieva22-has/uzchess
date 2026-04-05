import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class BookCreateAdminDto {
  @IsNumber() @ApiProperty() authorId!: number;
  @IsNumber() @ApiProperty() categoryId!: number;
  @IsNumber() @ApiProperty() languageId!: number;
  @IsNumber() @ApiProperty() difficultyId!: number;
  @IsString() @MaxLength(128) @ApiProperty() title!: string;
  @IsString() @ApiProperty() description!: string;
  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  image?: string;
  @IsNumber() @Min(0) @ApiProperty() price!: number;
  @IsOptional() @IsNumber() @Min(0) @ApiPropertyOptional() newPrice?: number;
  @IsNumber() @Min(1) @ApiProperty() pages!: number;
  @IsDateString() @ApiProperty() pubDate!: string;
}
