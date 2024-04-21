import { Injectable, HttpException, HttpStatus, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entity/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto, DataCreateUserDto, AccountDto } from "../dto/user.dto";
import * as bcrypt from 'bcrypt';
import { plainToInstance } from "class-transformer";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async createUser(data: CreateUserDto) {
        if (await this.getAccount(data.account) === null) {
            //  chuyển HASH_PASSWORD từ string sang number
            const saltRounds = parseInt(process.env.HASH_PASSWORD, 10);
            const salt = await bcrypt.genSalt(saltRounds);
            data.password = await bcrypt.hash(data.password, salt)
            const dataNewUser = await this.usersRepository.save(data)
            return plainToInstance(DataCreateUserDto, dataNewUser, {
                excludeExtraneousValues: true
            })
        }
        throw new HttpException({
            status: HttpStatus.UNPROCESSABLE_ENTITY,
            message: [
                'Tài khoản đã tồn tại, hãy lấy tên tài khoản khác!',
            ],
            error: 'BAD REQUEST'
        },
            HttpStatus.UNPROCESSABLE_ENTITY
        )
    }

    async getAccount(data: string): Promise<AccountDto> {
        let account = await this.usersRepository.findOne({
            where: [{ email: data }, { id: data }, { account: data}],
            select: {
                id: true,
                email: true,
                password: true,
                userName: true
            }
        })
        return plainToInstance(AccountDto, account, {
            excludeExtraneousValues: true
        })
    }


}