import { Controller, Request, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Users } from '../users/users.entity';


@Controller('users')
export class UsersController {

  constructor(
    private usersService: UsersService
  ){}

  @Get()
  async getUsers(): Promise<Users[]> {
    return await this.usersService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return await this.usersService.findOne(req.user.id)
  }
}
