import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class BookReviewCreatePublicDto {
  @IsNumber() @ApiProperty() bookId!: number;
  @IsInt() @Min(1) @Max(5) @ApiProperty() rating!: number;
  @IsOptional()
  @IsString()
  @MaxLength(512)
  @ApiPropertyOptional()
  comment?: string;
}
