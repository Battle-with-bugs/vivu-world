import {
    IsEmail,
    IsNotEmpty,
    Length,
    IsString,
    IsObject,
    validate,
    IsPhoneNumber,
    IsDate,
    IsBoolean,
  } from 'class-validator';
  import { Expose, Transform } from 'class-transformer';
  import { PartialType, OmitType, PickType } from '@nestjs/mapped-types'
  import { BaseDto } from 'src/common/base/base.dto';

  export class UserDto extends BaseDto {

    @Expose()
    @IsString()
    @Length(2,20)
    userName: string;

    @Expose()
    @IsString()
    account: string;
  
    @Expose()
    @IsEmail()
    email: string;
  
    @Expose()
    @IsPhoneNumber()
    phone: number;
  
    @Expose()
    @IsString()
    @Length(8,24)
    password: string;
  
    @Expose()
    @IsObject()
    avatar: object;
  
    @Expose()
    @IsString()
    Address: string;
  
    @Expose()
    @IsDate()
    birthday: Date;
  
    @Expose()
    @IsDate()
    LastLogin: Date;
  
    @Expose()
    @IsDate()
    Registered_At: Date;
  
    @Expose()
    @IsBoolean()
    isActive: boolean
  }
  

  export class CreateUserDto extends PickType(
    UserDto, [ 'email', "password", "account"] as const
  ) {};

  export class DataCreateUserDto extends PickType(
    UserDto, ["account","email", "created_At", 'password']  as const
  ) {};

  export class AccountDto extends PickType(
    UserDto, ['id','email','account', 'password', 'avatar',] as const
  ) {};