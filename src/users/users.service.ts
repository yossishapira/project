import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/users.model';
import * as bcrypt from 'bcrypt'
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) { }
  async create(createUserDto: CreateUserDto): Promise<{ message: string }> {
    
    const { username, email, password, role } = createUserDto
    const user = await this.userModel.findOne({ 
      where: {username} 
    });
    
    if (user) {
      throw new BadRequestException('user already exists');
    }
    const hash = await bcrypt.hash(password, 10)
    const nwe_user = this.userModel.create({
      username: username,
      email: email,
      password: hash,
      role: role
    });
    return {
      message: "the user create sucsses"
    };
  }
  async getByid(username: string): Promise<User | null> {
    return this.userModel.findOne({
      where: { username }
    });
  }
  async removeById(usename: string): Promise<{ message: string }> {
    const user = await this.userModel.findOne({
      where: { usename }
    });
    if (!user) {
      throw new UnauthorizedException('usern not found');
    }
    await user.destroy();
    return {
      message: 'the user removed sucsses',
    };
  }
  async updateByid(
    user: CreateUserDto,
    usename: string,
  ): Promise<{ message: string; data: any }> {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
    }
    await this.userModel.update(user, { where: { usename } });
    return {
      message: 'the user updated sucsses ',
      data: user,
    };
  }
  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}

