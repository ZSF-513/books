import { Controller, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UsersService } from './service';
@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersService.name);
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  getUsers(@Param() params) {
    this.logger.log('log get user', params.id);
    return this.usersService.get(params.id);
  }

  @Get('all')
  getAllUsers() {
    this.logger.log('log get all user');
    return this.usersService.getAll();
  }

  @Post()
  createUser(user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Put()
  updateUser(user: CreateUserDto) {
    return this.usersService.update(user);
  }
}
