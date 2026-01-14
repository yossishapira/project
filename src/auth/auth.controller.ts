import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Res,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { type Response } from 'express';
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto:CreateAuthDto,@Res() res:Response) {
    const {access_token} = await this.authService.signIn(signInDto.username, signInDto.password)
    res.header({"access_token":access_token})
    res.json("login succsess");
  }

} 
