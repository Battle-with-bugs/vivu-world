import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const appOptions = { cors: true };
  const POST = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule,appOptions);
  await app.listen(POST, () => {
    console.log(`server listening on post ${POST}`)
  });
}


bootstrap();
