import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class UserLessonCreatePublicDto {
  @IsNumber() @ApiProperty() courseLessonId!: number;
  @IsOptional() @IsNumber() @ApiPropertyOptional() stoppedAt?: number;
  @IsOptional() @IsBoolean() @ApiPropertyOptional() isCompleted?: boolean;
}
