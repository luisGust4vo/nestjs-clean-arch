import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from './env-config.interface';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) {}

  getAppPort(): number {
    return Number(this.configService.get<number>('PORT')); // Acessando a variável PORT
  }

  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV'); // Acessando a variável NODE_ENV
  }
}
