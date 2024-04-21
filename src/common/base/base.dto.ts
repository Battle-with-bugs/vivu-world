import {
    IsString,
    IsDate,
} from 'class-validator';
import { Expose } from 'class-transformer';

export abstract class BaseDto {
    @Expose()
    @IsString()
    id: string;

    @Expose()
    @IsDate()
    created_At: Date;

    @Expose()
    @IsDate()
    updated_At: Date;

    @Expose()
    @IsDate()
    deleted_At: Date;
}

