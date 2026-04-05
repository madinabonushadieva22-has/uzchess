import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CourseLikeCreatePublicDto {
  @IsNumber() @ApiProperty() courseId!: number;
}
