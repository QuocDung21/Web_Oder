import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return process.env.URL_CONNECT_MONGODB;
  }

  getTest(): string {
    return process.env.URL_CONNECT_MONGODB;
  }
}
