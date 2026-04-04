import {IsDateString, IsOptional, IsString, MaxLength} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class NewsUpdateAdminDto {
    @IsString()
    @MaxLength(256)
    @IsOptional()
    @ApiProperty()
    title?:string;

    @IsOptional()
    @IsDateString()
    @ApiProperty()
    date?: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    content?: string;

}