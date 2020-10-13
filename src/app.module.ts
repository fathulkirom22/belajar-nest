import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { CommandModule } from 'nestjs-command';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule, 
    UsersModule,
    CommandModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
