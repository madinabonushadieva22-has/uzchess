import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CourseCreateAdminDto {
  @IsNumber() @ApiProperty() authorId!: number;
  @IsNumber() @ApiProperty() categoryId!: number;
  @IsNumber() @ApiProperty() languageId!: number;
  @IsNumber() @ApiProperty() difficultyId!: number;

  @IsString()
  @MaxLength(128)
  @ApiProperty()
  title!: string;

  @IsString()
  @MaxLength(128)
  @ApiProperty()
  image!: string;

  @IsNumber()
  @Min(0)
  @ApiProperty()
  price!: number;

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
