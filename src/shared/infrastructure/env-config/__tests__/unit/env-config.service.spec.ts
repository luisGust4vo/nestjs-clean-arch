import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigService } from '../../env-config.service';
import { EnvConfigModule } from '../../env-config.module';

describe('EnvConfigService unit tests', () => {
  let sut: EnvConfigService;

  beforeEach(async () => {
    // Defina NODE_ENV como 'test' para garantir que o arquivo .env.test será carregado
    // process.env.NODE_ENV = 'test';

    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvConfigModule], // Importando o EnvConfigModule
    }).compile();

    sut = module.get<EnvConfigService>(EnvConfigService); // Injetando o EnvConfigService
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should get the correct PORT from .env.test', () => {
    const port = sut.getAppPort(); // Acessando a variável PORT
    expect(port).toBe(3000); // Espera-se que a variável PORT seja 3000
  });

  it('should get the correct NODE_ENV', () => {
    const nodeEnv = sut.getNodeEnv(); // Acessando a variável NODE_ENV
    expect(nodeEnv).toBe('test'); // Espera-se que NODE_ENV seja "test"
  });
});
