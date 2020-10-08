import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { Users } from './users/users.entity';

@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  async getTest(): Promise<Users[]> {
    return await this.usersService.findAll()
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return await this.usersService.findOne(req.user.id)
  }
}
