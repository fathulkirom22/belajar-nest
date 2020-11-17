import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { UsersService } from './users.service';

@Injectable()
export class UsersSeed {
constructor(
    private readonly userService: UsersService,
) { }

@Command({ command: 'seed:user', describe: 'seed a user', autoExit: true })
  async create() {
    const user = await this.userService.create(
      {
        email: 'kirom222@gmail.com',
        password: '123456',
        name: 'Fathul Kirom',
      }
    );
    console.log(user);
  }
}