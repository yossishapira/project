import { IsString, IsNegative } from 'class-validator';

export class CreateShiftDto {
    @IsString()
    @IsNegative()
    startTime: string;

    @IsString()
    @IsNegative()
    endTime: string;

    @IsString()
    @IsNegative()
    location: string;
}
