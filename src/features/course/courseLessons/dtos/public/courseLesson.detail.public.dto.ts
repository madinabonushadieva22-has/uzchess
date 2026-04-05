import { Expose } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CourseLessonDetailPublicDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
  @Expose() @ApiPropertyOptional() content?: string;
  @Expose() @ApiPropertyOptional() thumbnail?: string;
  @Expose() @ApiProperty() video!: string;
  @Expose() @ApiPropertyOptional() order?: number;
  @Expose() @ApiProperty() isFree!: boolean;
}
