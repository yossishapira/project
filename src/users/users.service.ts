import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/users.model';
import * as bcrypt from 'bcrypt'
import { BadRequestException } from '@nestjs/common';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) { }
  async create(createUserDto: CreateUserDto): Promise<{message: string}> {
    const {username,email,password,role} = createUserDto
     const user = await this.userModel.findOne({ username });
    if (user) {
      throw new BadRequestException('user already exists');
    }
    const hash = await bcrypt.hash(password, 10)
    const nwe_user =  this.userModel.create({
      username:username,
      email:email,
      password:hash,
      role:role
    });
    return { 
      message: "the user create sucsses"
    };
  }
  async findOne(username: string): Promise<User | null> {
    return this.userModel.findOne({
      where: {username},
    });
  }
  // update(id: string, updatedUser: User): void {
  //   const userIndex = this.users.findIndex(user => user.id === id);
  //   if (userIndex > -1) {
  //     this.users[userIndex] = updatedUser;
  //   }
  // }
  // delete(id: string): void {
  //   this.users = this.users.filter(user => user.id !== id);
  // }
  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}

