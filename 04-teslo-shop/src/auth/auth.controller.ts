import { Controller, Get, Post, Body, UseGuards, Req, Headers, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { IncomingHttpHeaders } from 'http';

import { AuthService } from './auth.service';
import { Auth, GetUser, RawHeaders, RoleProtected } from './decorators';

import { CreateUserDto, LoginUserDto } from './dto';
import { User } from './entities/user.entity';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { ValidRoles } from './interfaces';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(
    //TODO:::
    @GetUser() user:User
  ){
    return this.authService.checkAuthStatus(user)
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    @Req() request: Express.Request, 
    @GetUser() user: User,
    @GetUser('email') userEmail:string,

    @RawHeaders() rawHeaders:string[],
    @Headers() headers: IncomingHttpHeaders
  ){
    
    console.log(request);
    return {
      ok: true,
      message: 'Hola mundo private',
      user,  
      userEmail,
      rawHeaders,
      headers
    }
  }

  // @SetMetadata('roles', ['admin','super-user'])
  @Get('private2')
  @RoleProtected(ValidRoles.superUser,ValidRoles.admin)
  @UseGuards(AuthGuard(), UserRoleGuard)
  privateRoute2(
    @GetUser() user:User,
  ){
    return {
      ok: true,
      user,
    }
  }
  
  @Get('private3')
  @Auth(ValidRoles.admin,ValidRoles.superUser)
  privateRoute3(
    @GetUser() user:User,
  ){
    return {
      ok: true,
      user,
    }
  }
}
