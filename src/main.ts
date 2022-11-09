import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  const configService = app.get(ConfigService);
  const port = configService.get('port');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('ToDo Api')
    .setDescription('A rest api to manage ToDos')
    .setVersion('1.0')
    .addTag('ToDo')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
}
bootstrap();
