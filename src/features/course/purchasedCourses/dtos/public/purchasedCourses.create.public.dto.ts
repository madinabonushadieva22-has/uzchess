import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PurchasedCourseCreatePublicDto {
  @IsNumber() @ApiProperty() courseId!: number;
}
