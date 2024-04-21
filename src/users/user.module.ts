import { Module,  } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/User.entity";
import { Profile } from "./entity/UserProfile.entity";
import { UserService } from "./service/user.service";
import { UserController } from "./user.controller";
@Module({
    imports: [
        TypeOrmModule.forFeature([User, Profile]),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})

export class UserModule{}