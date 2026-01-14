import { Controller, Post, Body, Get } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { type Shift } from './models/shifts.model';
@Controller('shifts')
export class ShiftsController {
    constructor(private shiftsService: ShiftsService) { }

    @Post()
    addShift(@Body() shift: Shift): string {
        this.shiftsService.create(shift);
        return "Registration was successful"

    }
    @Get()
    async findAllShifts(): Promise<Shift[]> {
        return this.shiftsService.findAll()
    }
}

