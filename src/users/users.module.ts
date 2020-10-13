import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersController } from './users.controller';
import { UsersSeed } from './users.seed'

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService, UsersSeed],
  exports: [UsersService, UsersSeed],
  controllers: [UsersController]
})
export class UsersModule {}
