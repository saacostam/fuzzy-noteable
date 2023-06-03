import { Model, FilterQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';
import { DB_KEYS } from '../../constants';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DB_KEYS.USER)
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);
    return createUser.save();
  }

  async findOne(filter: FilterQuery<User>): Promise<User | null>{
    return this.userModel.findOne(filter);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}