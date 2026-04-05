import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BookLikeListAdminDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() userId!: number;
  @Expose() @ApiProperty() bookId!: number;
  @Expose() @ApiProperty() created!: string;
}
