import { JwtModule, JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { AuthModule } from './auth.module';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // imports: [AuthModule],
      providers: [
        AuthService, 
        UsersService, 
        {
          provide: 'UsersRepository',
          useClass: Repository
        },
        {
          provide: 'JWT_MODULE_OPTIONS',
          useClass: JwtModule
        },
        JwtService
      ],
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
