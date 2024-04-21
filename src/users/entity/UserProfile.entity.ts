import {
    PrimaryGeneratedColumn,
    OneToOne,
    Entity,
    Column,
    OneToMany,
    JoinColumn,
} from "typeorm";
import { BaseEntity } from "../../common/base/base.entity";

@Entity()
export class Profile extends BaseEntity {
    @Column({ type: "varchar", nullable: false, unique: true })
    email: string;

    @Column({ type: "varchar", nullable: true, default: 'https://vivu-world-cloud.s3.ap-southeast-1.amazonaws.com/image/anh-avatar-trang-tron.jpg' })
    avatar: string;

    @Column({ type: "int", nullable: true, unique: true })
    phone: number;

    @Column({ type: "varchar", nullable: true })
    Address: string;

    @Column({ type: "date", nullable: true })
    birthday: Date;

    @Column({ default: false })
    isActive: boolean;

    @Column({ type: "datetime", nullable: true })
    LastLogin: Date;
}