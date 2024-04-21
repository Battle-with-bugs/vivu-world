import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

export const UseConfigModule = ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `.development.env`,
    validationSchema: Joi.object({
      
      PORT: Joi.number().required().default(3002),
      //database
      DATABASE_NAME: Joi.string().required(),
      DATABASE_USER: Joi.string().required(),
      DATABASE_PASSWORD: Joi.string().required(),

      //jwt vs hash
      HASH_PASSWORD: Joi.number().required(),
    })
  })