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

    @Column({ type: "int", nullable: true, unique: true })
    phone: number;

    @Column({ type: "varchar", nullable: true })
    Address: string;

    @Column({ type: "date", nullable: true })
    birthday: Date;
}