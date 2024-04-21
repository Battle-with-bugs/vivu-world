import {
    Controller,
    Body,
    Post,
    HttpCode,
    Param,
    Put,
    UploadedFile,
    HttpException,
    HttpStatus,
    UseInterceptors,
    ParseFilePipe,
    ParseFilePipeBuilder,
    Req,
    Get,
    Query,
} from "@nestjs/common";
import { UserService } from "./service/user.service";
import { DataCreateUserDto, CreateUserDto } from "./dto/user.dto";
@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    async register(@Body() data: CreateUserDto): Promise<DataCreateUserDto> {
      return this.userService.createUser(data)
    }
}