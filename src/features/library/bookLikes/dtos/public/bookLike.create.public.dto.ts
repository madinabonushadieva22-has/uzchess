import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class BookLikeCreatePublicDto {
  @IsNumber() @ApiProperty() bookId!: number;
}
