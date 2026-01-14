import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class Shift extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare username: string;

    @Column({
        type: DataType.STRING,
        unique: true,

    })
    declare email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare role: string;
}

