import { IsString, IsEmpty } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsEmpty()
    username: string;

    @IsString()
    @IsEmpty()
    email: string;

    @IsString()
    @IsEmpty()
    password: string;

    @IsString()
    @IsEmpty()
    role: string;
}
