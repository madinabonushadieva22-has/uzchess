import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BookCategoryListPublicDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
}
