import {
    PrimaryGeneratedColumn,
    OneToOne,
    Entity,
    Column,
    OneToMany,
    JoinColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { BaseEntity } from "../../common/base/base.entity";
import { Profile } from "./UserProfile.entity";

@Entity()
export class User extends BaseEntity {
    @Column({ type: "varchar", nullable: false, })
    userName: string;

    @Column({ type: "varchar", nullable: false, })
    account: string;

    @Column({ type: "varchar", nullable: false })
    @Exclude()
    password_Hash: string;

    @OneToOne(() => Profile, { cascade: ['insert', 'update'] })
    @JoinColumn()
    profile: Profile;
}