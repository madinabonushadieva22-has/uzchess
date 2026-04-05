import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ReportType } from '../../../../../core/enums';


export class ReportCreatePublicDto {
  @IsInt() @ApiProperty() categoryId!: number;
  @IsEnum(ReportType) @ApiProperty({ enum: ReportType }) target!: ReportType;
  @IsInt() @ApiProperty() targetId!: number;
  @IsOptional()
  @IsString()
  @MaxLength(256)
  @ApiPropertyOptional()
  description?: string;
}
