import { Controller, Request, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

  constructor(
    private usersService: UsersService
  ){}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProfile(@Request() req) {
    return await this.usersService.findOne(req.user.id)
  }
}
