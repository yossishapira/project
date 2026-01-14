import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateShiftDto } from './dto/create-shifts.dto';
import { Shift } from './models/shifts.model';

@Injectable()
export class ShiftsService {
      constructor(
      @InjectModel(Shift)
        private readonly shiftModel: typeof Shift,
      ) { }
      async create(createUserDto: CreateShiftDto): Promise<Shift> {
        return this.shiftModel.create({createUserDto
        });
      }
    async findOne(id: string): Promise<Shift | undefined> {
        return this.shiftModel.findOne({
      where: {id},
    });
      }
    update(id: string, updatedShift: Shift): void {
           const shiftIndex = this.shifts.findIndex(shift => shift.id === id);
           if (shiftIndex > -1) {
             this.shifts[shiftIndex] = updatedShift;
           }
         }
    delete(id: string): void {
           this.shifts = this.shifts.filter(user => user.id !== id);
         }
    findAll(): Shift[] {
        return this.shifts;
      }
}
