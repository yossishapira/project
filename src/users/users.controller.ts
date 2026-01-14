import { HttpStatus, HttpCode, Controller, Post, Body, Get, Delete, UseGuards, Param,Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/role.enum';
import { RolesGuard } from 'src/role/roles.guard';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @UseGuards(AuthGuard)
    @Post()
    async addUSser(@Body() createUserDto: CreateUserDto) {
        await this.usersService.create(createUserDto);
        return { message: 'Registration was successful' };

    }
    @Roles(Role.commander)
    @UseGuards(AuthGuard, RolesGuard)
    @Get()
    async getAllUser() {
        console.log("!!");
        return this.usersService.findAll()
    }
    @Get()
    async GetUsers(@Param('id') id: string) {
        return this.usersService.getByid(id)
    }

    @HttpCode(HttpStatus.OK)
    @Roles(Role.commander)
    @UseGuards(AuthGuard, RolesGuard)
    @Delete(':id')
    removeById(@Param('id') id: string) {
        return this.usersService.removeById(id);
    }

    @Roles(Role.commander)
    @UseGuards(AuthGuard, RolesGuard)
    @Patch(':id')
    upByid(@Param('id') id: string, @Body() signUpDto: CreateUserDto) {
        return this.usersService.updateByid(signUpDto, id);
    }
}
