import { Module } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { ShiftsController } from './shifts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shift } from './models/shifts.model';

@Module({
   imports: [SequelizeModule.forFeature([Shift])],
    providers: [ShiftsService],
      controllers:[ShiftsController],
      exports: [ShiftsService]
})

export class ShiftsModule{}