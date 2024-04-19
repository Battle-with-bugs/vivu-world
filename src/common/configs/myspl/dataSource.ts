import { TypeOrmModule } from '@nestjs/typeorm';

export const UseTypeOrmModule = TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: true,
    // entities: [Users, User_Post],
    synchronize: true
  })