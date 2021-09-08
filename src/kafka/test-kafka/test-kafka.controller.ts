import { Body, Controller, Inject, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  KafkaMessage,
  Producer,
} from '@nestjs/microservices/external/kafka.interface';

@Controller()
export class TestKafkaController {
  constructor(@Inject('KAFKA_PRODUCER') private kafkaProducer: Producer) {}

  @MessagePattern('topico-exemplo')
  consumer(@Payload() message: KafkaMessage) {
    console.log(message.value);
  }

  @Post('test-kafka')
  async producer(@Body() body) {
    await this.kafkaProducer.send({
      topic: 'topico-exemplo',
      messages: [
        {
          key: 'pagamentos',
          value: JSON.stringify(body),
        },
      ],
    });
  }
}
