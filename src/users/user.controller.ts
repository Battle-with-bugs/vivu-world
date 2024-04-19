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

@Controller("users")
export class UsersController {
    constructor(private readonly userService: UserService) { }
}