import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'ivan1234' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Ivan',
        password: 'ivan1234',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged In' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({
    example: 'Session has ended',
  })
  msgL: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 'Ivan' })
  userId: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;
}

export class RegisterResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'Ivan' })
  password: string;

  @ApiProperty({
    example: '$2b$10$5l3PLXcJKR7JshU2x8klEORgCxUqrEWMXS/ocFKf9G9idWAHYIRvG',
  })
  email: string;

  @ApiProperty({ example: '2023-11-25T15:04:04.185Z' })
  updateAt: string;

  @ApiProperty({ example: '2023-11-25T15:04:04.185Z' })
  createdAt: string;
}
