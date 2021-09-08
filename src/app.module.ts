import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { KafkaModule } from './kafka/kafka.module';
//decorator - Javascript - Ecmascript 7

@Module({
  imports: [AuthModule, KafkaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
