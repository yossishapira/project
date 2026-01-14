import { IsString, IsNegative } from 'class-validator';

export class CreateAssignmentDto {
    @IsString()
    @IsNegative()
    userId: string;

    @IsString()
    @IsNegative()
    shiftId: string;
}
