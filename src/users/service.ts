import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema';
import { CreateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async create(createUsersDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUsersDto);
    return createUser.save();
  }

  async update(updateUsersDto: CreateUserDto): Promise<User> {
    const query = { cid: updateUsersDto?.cid };
    const updateUser = this.userModel.findOneAndUpdate(query, updateUsersDto);
    return updateUser;
  }

  async get(id): Promise<User> {
    return this.userModel.findById(id);
  }

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
