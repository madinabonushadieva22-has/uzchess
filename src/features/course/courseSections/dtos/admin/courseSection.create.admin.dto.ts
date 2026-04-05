import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CourseSectionCreateAdminDto {
  @IsNumber() @ApiProperty() courseId!: number;
  @IsString() @MaxLength(256) @ApiProperty() title!: string;
  @IsOptional() @IsNumber() @ApiPropertyOptional() order?: number;
  @IsDateString() @ApiProperty() date!: string;
}
