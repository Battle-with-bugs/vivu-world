import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

export const UseConfigModule = ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `.development.env`,
    validationSchema: Joi.object({
  
      PORT: Joi.number().required().default(3002),
      DATABASE_NAME: Joi.string().required(),
      DATABASE_USER: Joi.string().required(),
      DATABASE_PASSWORD: Joi.string().required(),
    })
  })