import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
// import { ShiftsController } from './shifts/shifts.controller';
// import { ShiftsService } from './shifts/shifts.service';
// import { ShiftsModule } from './shifts/shifts.module';
// import { AssignmentsController } from './assignments/assignments.controller';
// import { AssignmentsService } from './assignments/assignments.service';
// import { AssignmentsModule } from './assignments/assignments.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'rootpass123',
    database: 'guard_manager',
    autoLoadModels: true,
    synchronize: true,
  }), ConfigModule.forRoot({
    isGlobal: true,
  },
  ),
    UsersModule,
    // ShiftsModule,
    // AssignmentsModule,
    AuthModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
