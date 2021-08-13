import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports:[
    TypeOrmModule.forFeature([UserRepository]),
    ],
    controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
