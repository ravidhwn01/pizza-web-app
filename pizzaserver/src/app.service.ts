import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Get Fresh Pizza In 10 Minutes';
  }
}
