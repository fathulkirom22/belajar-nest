import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { CreateUsersDto } from './users.dto'

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ){}

  async create(req: CreateUsersDto) {
    const user = this.usersRepository.create()
    user.email = req.email
    user.password = req.password
    return await this.usersRepository.save(user)
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  findOneByEmailForLogin(email: string): Promise<Users> {
    return this.usersRepository.findOne(
      { 
        select: [ "email", "password"],
        where: { email: email }
      }
    )
  }

}
