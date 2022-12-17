import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['skilled-krill-9269-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'c2tpbGxlZC1rcmlsbC05MjY5JPQeephPFlZZaikGOqeH2Wo_8Mlfteg9_4VqoFE',
          password:
            'KX-q16nVcH8jBZwYRdYDvYKFgn3AjEzBfPqkfrikmD2A_yz5PV7sxdnz52dhAoxjOKI34Q==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
