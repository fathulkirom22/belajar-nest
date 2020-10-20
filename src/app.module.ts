import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { CommandModule } from 'nestjs-command';
import { Users } from './users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "postgres",
      "port": 5432,
      "username": "postgres",
      "password": "postgres",
      "database": "dev",
      "entities": [Users],
      "autoLoadEntities": true,
      "synchronize": true
    }),
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
