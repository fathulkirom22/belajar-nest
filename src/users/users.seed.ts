import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { UsersService } from './users.service';

@Injectable()
export class UsersSeed {
constructor(
    private readonly userService: UsersService,
) { }

@Command({ command: 'create:user', describe: 'create a user', autoExit: true })
  async create() {
    const user = await this.userService.createAndSave(
      {
        email: 'kirom222@gmail.com',
        password: '123456',
      }
    );
    console.log(user);
  }
}