import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      name: 'John',
      password: 'changeme',
    },
    {
      userId: 2,
      name: 'Jane',
      password: 'changeme',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.name === username);
  }
}
