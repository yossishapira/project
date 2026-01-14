import { IsString, IsEmpty } from 'class-validator';

export class CreateAuthDto {
    @IsString()
    @IsEmpty()
    username: string;

    @IsString()
    @IsEmpty()
    password: string;

}
