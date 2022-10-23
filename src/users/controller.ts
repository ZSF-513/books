import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UsersService } from './service';
@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersService.name);
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUsers(@Param() params) {
    this.logger.log('log get user', params.id);
    const result = await this.usersService.get(params.id);
    this.logger.log('log get user result', result);
    return result;
  }

  @Get('all')
  getAllUsers() {
    this.logger.log('log get all user');
    return this.usersService.getAll();
  }

  @Post()
  async createUser(@Body() body) {
    this.logger.log('创建用户参数---params', body);
    const res = await this.usersService.create(body);
    this.logger.log('创建用户---result', res);
    return res;
  }

  @Put()
  updateUser(user: CreateUserDto) {
    return this.usersService.update(user);
  }
}
