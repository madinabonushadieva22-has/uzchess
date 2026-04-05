import {IsDateString, IsString, MaxLength} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class NewsCreateAdminDto {
    @IsString()
    @MaxLength(256)
    @ApiProperty()
    title!:string;

    @IsDateString()
    @ApiProperty()
    date!: string;

    @IsString()
    @ApiProperty()
    content!: string;

}