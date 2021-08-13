import {Controller} from '@nestjs/common';
import {UserDTO} from './dto/user.dto'
import { UserMSG } from 'src/common/constants';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly _userService: UserService){}

  @MessagePattern(UserMSG.CREATE)
      create(@Payload() userDTO: UserDTO){
        return this._userService.create(userDTO)
      }
  @MessagePattern(UserMSG.FIND_ALL)
  findAll(){
      return this._userService.findAll()
  }
  @MessagePattern(UserMSG.FIND_ONE)
  findOne(@Payload('id') id:string){
      return this._userService.findOne(id)
  }
  @MessagePattern(UserMSG.UPDATE)
  update(@Payload() payload: any){
      return this._userService.update(payload.id, payload.userDTO)
  }
  @MessagePattern(UserMSG.DELETE)
  delete(@Payload() id :string){
      return this._userService.delete(id)
  }
}

