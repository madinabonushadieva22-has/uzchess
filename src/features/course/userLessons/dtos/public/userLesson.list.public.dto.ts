import { Expose } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserLessonListPublicDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() courseLessonId!: number;
  @Expose() @ApiPropertyOptional() stoppedAt?: number;
  @Expose() @ApiProperty() isCompleted!: boolean;
}