import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CourseLessonCreateAdminDto {
  @IsNumber() @ApiProperty() courseId!: number;
  @IsNumber() @ApiProperty() courseSectionId!: number;
  @IsString() @MaxLength(128) @ApiProperty() title!: string;
  @IsOptional() @IsString() @ApiPropertyOptional() content?: string;
  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  thumbnail?: string;
  @IsString() @MaxLength(256) @ApiProperty() video!: string;
  @IsOptional() @IsNumber() @ApiPropertyOptional() order?: number;
  @IsDateString() @ApiProperty() date!: string;
  @IsOptional() @IsBoolean() @ApiPropertyOptional() isFree?: boolean;
}
