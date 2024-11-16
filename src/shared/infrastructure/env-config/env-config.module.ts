import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Importando ConfigModule do NestJS
import { EnvConfigService } from './env-config.service';
import { join } from 'node:path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        join(__dirname, `../../../../.env.${process.env.NODE_ENV}`), // Carregar o arquivo correto com base no NODE_ENV
      ],
    }),
  ],
  providers: [EnvConfigService],
  exports: [EnvConfigService], // Exportando o EnvConfigService
})
export class EnvConfigModule {}
