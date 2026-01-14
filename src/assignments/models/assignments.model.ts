import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class Assignment extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare userId: string;

    @Column({
        type: DataType.STRING,
        unique: true,

    })
    declare shiftId: string;

}

