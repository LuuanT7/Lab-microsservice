import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
//Em quanto o Controller é usado para criação de rotas, o Service é usado para todo o resto,
//como conexões com banco de dados, repositórios, algo para criar uma classe e definir funcionalidades e etc,
//é uma classe genérica
