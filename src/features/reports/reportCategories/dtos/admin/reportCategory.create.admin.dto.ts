import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class ReportCategoryCreateAdminDto {
  @IsString() @MaxLength(64) @ApiProperty() title!: string;
  @IsOptional() @IsNumber() @ApiPropertyOptional() order?: number;
}
