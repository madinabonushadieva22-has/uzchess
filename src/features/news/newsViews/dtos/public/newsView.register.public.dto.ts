import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class NewsViewRegisterPublicDto {
  @IsNumber() @ApiProperty() newsId!: number;
}
