import { Module } from '@nestjs/common';
import { UseConfigModule } from './common/configs/configModule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { UseTypeOrmModule } from './common/configs/myspl/dataSource';
@Module({
  imports: [
    UseConfigModule,
    UseTypeOrmModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
