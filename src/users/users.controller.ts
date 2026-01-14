import { Controller,Post,Body,Get, Req, UseGuards } from '@nestjs/common';
import {  UsersService} from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {type Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @UseGuards(AuthGuard)
    @Post()
    async addUSser(@Body() createUserDto: CreateUserDto)  {
        await this.usersService.create(createUserDto);
        return { message: 'Registration was successful' };

    }

    @Get("/dudu")
    async getAllUser(){
        console.log("!!");
        
        return  this.usersService.findAll()
    }
    @Get()
    async GetUsers(@Req() req:string): Promise<User[]> {
        return this.usersService.findOne(req)
    }
}
