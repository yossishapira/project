import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateShiftDto } from './dto/create-shifts.dto';
import { Shift } from './models/shifts.model';
import { UnauthorizedException } from '@nestjs/common';
// @Injectable()
// export class ShiftsService {
//       constructor(
//       @InjectModel(Shift)
//         private readonly shiftModel: typeof Shift,
//       ) { }
//       async create(createUserDto: CreateShiftDto): Promise<Shift> {
//         return this.shiftModel.create({createUserDto
//         });
//       }
//     async findOne(id: string): Promise<Shift | undefined> {
//         return this.shiftModel.findOne({
//       where: {id},
//     });
//       }
//     update(id: string, updatedShift: Shift): void {
//            const shiftIndex = this.shifts.findIndex(shift => shift.id === id);
//            if (shiftIndex > -1) {
//              this.shifts[shiftIndex] = updatedShift;
//            }
//          }
//     delete(id: string): void {
//            this.shifts = this.shifts.filter(user => user.id !== id);
//          }
//     findAll(): Shift[] {
//         return this.shifts;
//       }
// }


@Injectable()
export class ShiftsService {
  constructor(
    @InjectModel(Shift)
    private readonly shiftModel: typeof Shift,
  ) { }
  async create(createShiftDto: CreateShiftDto): Promise<{ message: string }> {
    
    const { startTime, endTime, location } = createShiftDto
    
    const nwe_shift = this.shiftModel.create({
      startTime: startTime,
      endTime: endTime,
      location: location
    });
    return {
      message: "the shift create sucsses"
    };
  }
  async getByid(id: string): Promise<Shift | null> {
    return this.shiftModel.findOne({
      where: { id }
    });
  }
  async removeById(id: string): Promise<{ message: string }> {
    const shift = await this.shiftModel.findOne({
      where: { id }
    });
    if (!shift) {
      throw new UnauthorizedException('shift not found');
    }
    await shift.destroy();
    return {
      message: 'the shift removed sucsses',
    };
  }
  async updateByid(
    shift: CreateShiftDto,
    id: string,
  ): Promise<{ message: string; data: any }> {
    await this.shiftModel.update(shift, { where: { usename } });
    return {
      message: 'the user updated sucsses ',
      data: user,
    };
  }
  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
