import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { RabbitMQ } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,{
    transport: Transport.RMQ,
    options:{
      urls: ['amqps://lwbjnkjq:4ue4L7SHaMN7yh06QwOUuzm81o3U99Pg@elk.rmq2.cloudamqp.com/lwbjnkjq'],
      queue: RabbitMQ.UserQueue,
    }
  });
  await app.listen();
  console.log('Microservice user listen')
}
bootstrap();
