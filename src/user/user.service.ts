import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { UserDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt'
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository) 
        private readonly _userRepository: UserRepository
    ){}

    async hashPassword(password: string) : Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt)
    }

     async create(userDTO: UserDTO): Promise<User>{
         const hash = await this.hashPassword(userDTO.password);
        const newUser = await this._userRepository.save({...userDTO, password: hash})
        return await newUser
 }

    async findAll(): Promise<User[]>{
        return await this._userRepository.find()
    }

    async findOne(id: string): Promise<User>{
        return await this._userRepository.findOne(id)
    }

    async update(id: string, userDTO: UserDTO) : Promise<User>{
        const hash = await this.hashPassword(userDTO.password);
        const user = {...userDTO,password: hash}
        return await this._userRepository.findOne(user)

    }

    async delete(id: string){
        await this._userRepository.delete(id)
        return {status: HttpStatus.OK, msg: 'Deleted'}
    }

  
}