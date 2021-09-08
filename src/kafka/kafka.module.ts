import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { TestKafkaController } from './test-kafka/test-kafka.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['host.docker.internal:9094'],
          },
          consumer: {
            groupId: 'pagamentos' + Math.random(),
          },
        },
      },
    ]),
  ],
  controllers: [TestKafkaController],
  providers: [
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (client: ClientKafka) => {
        return client.connect();
      },
      inject: ['KAFKA_SERVICE'],
    },
  ],
})
export class KafkaModule {}
